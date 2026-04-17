import { getSinglePost, getPublishedPosts, getPostMetadataBySlug } from '@/lib/notion';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogPostContent from '@/components/sections/BlogPostContent';
import { Metadata } from 'next';

interface PostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostMetadataBySlug(slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.summary || `Read about ${post.title} on Walter Manske's technical journal.`,
    keywords: post.tags ? post.tags.split(',').map((t: string) => t.trim()) : undefined,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: ['Walter Manske'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title!,
      description: post.summary,
    }
  };
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPost({ params }: PostProps) {
  const { slug } = await params;
  const post = await getSinglePost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <BlogPostContent post={post} />
      </main>
      <Footer />
    </div>
  );
}
