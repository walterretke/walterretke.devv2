import { getSinglePost } from '@/lib/notion';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface PostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PostProps) {
  const { slug } = await params;
  const post = await getSinglePost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12 prose lg:prose-xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mt-8">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}