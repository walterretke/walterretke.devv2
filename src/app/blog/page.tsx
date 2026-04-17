import { getPublishedPosts } from '@/lib/notion';
import Link from 'next/link';

export default async function BlogIndex() {
  const posts = await getPublishedPosts();

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}