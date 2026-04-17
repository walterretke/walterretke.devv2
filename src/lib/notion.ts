import { Client, isFullDatabase, isFullPage } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { cache } from 'react';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

const databaseId = process.env.NOTION_DATABASE_ID!;

/** Nome exato da opção Status no Notion (ex.: "Complete", "Done"). */
const publishedStatus = process.env.NOTION_PUBLISHED_STATUS ?? 'Complete';

let primaryDataSourceIdPromise: Promise<string> | null = null;

// Global cache for the data source ID to avoid repeated calls across requests in dev
let cachedDataSourceId: string | null = null;

async function getPrimaryDataSourceId(): Promise<string> {
  if (cachedDataSourceId) return cachedDataSourceId;
  
  if (!primaryDataSourceIdPromise) {
    primaryDataSourceIdPromise = (async () => {
      const database = await notion.databases.retrieve({
        database_id: databaseId,
      });
      if (!isFullDatabase(database)) {
        throw new Error('Notion response without full database metadata.');
      }
      const id = database.data_sources[0]?.id;
      if (!id) {
        throw new Error('Database without data_sources; check NOTION_DATABASE_ID.');
      }
      cachedDataSourceId = id;
      return id;
    })();
  }
  return primaryDataSourceIdPromise;
}

function getTitlePlainText(page: PageObjectResponse, name: string): string | undefined {
  const prop = page.properties[name] || page.properties[name.charAt(0).toUpperCase() + name.slice(1)];
  if (prop?.type === 'title') {
    return prop.title[0]?.plain_text;
  }
}

function getRichTextPlainText(page: PageObjectResponse, name: string): string | undefined {
  const prop = page.properties[name] || page.properties[name.charAt(0).toUpperCase() + name.slice(1)];
  if (prop?.type === 'rich_text') {
    return prop.rich_text[0]?.plain_text;
  }
}

function getDateStart(page: PageObjectResponse, name: string): string | undefined {
  const prop = page.properties[name] || page.properties[name.charAt(0).toUpperCase() + name.slice(1)];
  if (prop?.type === 'date' && prop.date) {
    return prop.date.start ?? undefined;
  }
}

export const getPublishedPosts = cache(async () => {
  const dataSourceId = await getPrimaryDataSourceId();

  // Try fetching with the status filter first
  let response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    result_type: 'page',
    filter: {
      or: [
        {
          property: 'status',
          type: 'status',
          status: { equals: publishedStatus },
        },
        {
          property: 'Status',
          type: 'status',
          status: { equals: publishedStatus },
        }
      ]
    },
    sorts: [{ property: 'date', direction: 'descending' }],
  }).catch(() => null);

  if (!response || response.results.length === 0) {
    response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      result_type: 'page',
    });
  }

  // OPTIMIZED: Remove N+1 markdown fetching. 
  return response.results.filter(isFullPage).map((post) => ({
    id: post.id,
    title: getTitlePlainText(post, 'title') || 'Untitled',
    slug: getRichTextPlainText(post, 'slug') || post.id,
    date: getDateStart(post, 'date'),
    preview: getRichTextPlainText(post, 'summary') || ''
  }));
});

export const getPostMetadataBySlug = cache(async (slug: string) => {
  const trimmed = slug?.trim();
  if (!trimmed) return null;

  const dataSourceId = await getPrimaryDataSourceId();

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    result_type: 'page',
    filter: {
      property: 'slug',
      type: 'rich_text',
      rich_text: { equals: trimmed },
    },
  });

  const page = response.results.find(isFullPage);
  if (!page) return null;

  return {
    id: page.id,
    title: getTitlePlainText(page, 'title'),
    date: getDateStart(page, 'date'),
    summary: getRichTextPlainText(page, 'summary') || '',
    tags: getRichTextPlainText(page, 'tags') || '',
  };
});

export const getSinglePost = cache(async (slug: string) => {
  const meta = await getPostMetadataBySlug(slug);
  if (!meta) return null;

  const mdBlocks = await n2m.pageToMarkdown(meta.id);
  const markdownString = n2m.toMarkdownString(mdBlocks);

  return {
    ...meta,
    content: markdownString.parent,
  };
});
