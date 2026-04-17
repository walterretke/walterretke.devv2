import { Client, isFullDatabase, isFullPage } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

const databaseId = process.env.NOTION_DATABASE_ID!;

/** Nome exato da opção Status no Notion (ex.: "Complete", "Done"). */
const publishedStatus = process.env.NOTION_PUBLISHED_STATUS ?? 'Complete';

let primaryDataSourceIdPromise: Promise<string> | null = null;

/**
 * Na API 2025-09+, a listagem de linhas do database passa a ser feita em `dataSources.query`.
 * O `database_id` do Notion continua válido para `databases.retrieve`, que devolve `data_sources`.
 */
async function getPrimaryDataSourceId(): Promise<string> {
  if (!primaryDataSourceIdPromise) {
    primaryDataSourceIdPromise = (async () => {
      const database = await notion.databases.retrieve({
        database_id: databaseId,
      });
      if (!isFullDatabase(database)) {
        throw new Error(
          'Resposta do Notion sem metadados completos do database; não foi possível obter data_source_id.',
        );
      }
      const id = database.data_sources[0]?.id;
      if (!id) {
        throw new Error('Database sem data_sources; verifique o NOTION_DATABASE_ID.');
      }
      return id;
    })();
  }
  return primaryDataSourceIdPromise;
}

function getTitlePlainText(page: PageObjectResponse, name: string): string | undefined {
  const prop = page.properties[name];
  if (prop?.type === 'title') {
    return prop.title[0]?.plain_text;
  }
}

function getRichTextPlainText(page: PageObjectResponse, name: string): string | undefined {
  const prop = page.properties[name];
  if (prop?.type === 'rich_text') {
    return prop.rich_text[0]?.plain_text;
  }
}

function getDateStart(page: PageObjectResponse, name: string): string | undefined {
  const prop = page.properties[name];
  if (prop?.type === 'date' && prop.date) {
    return prop.date.start ?? undefined;
  }
}

export const getPublishedPosts = async () => {
  const dataSourceId = await getPrimaryDataSourceId();

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    result_type: 'page',
    filter: {
      property: 'status',
      type: 'status',
      status: { equals: publishedStatus },
    },
    sorts: [{ property: 'date', direction: 'descending' }],
  });

  return response.results.filter(isFullPage).map((post) => ({
    id: post.id,
    title: getTitlePlainText(post, 'title'),
    slug: getRichTextPlainText(post, 'slug'),
    date: getDateStart(post, 'date'),
  }));
};

export const getSinglePost = async (slug: string) => {
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

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdownString = n2m.toMarkdownString(mdBlocks);

  return {
    title: getTitlePlainText(page, 'title'),
    content: markdownString.parent,
  };
};
