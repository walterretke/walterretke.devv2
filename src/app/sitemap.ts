import { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/notion';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://walterretke.com'; // Replace with your actual domain

  // Get all blog posts for dynamic routes
  const posts = await getPublishedPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/en/blogs/${post.slug}`,
    lastModified: post.date || new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const ptBlogUrls = posts.map((post) => ({
    url: `${baseUrl}/pt/blogs/${post.slug}`,
    lastModified: post.date || new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pt/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
    ...ptBlogUrls,
  ];
}
