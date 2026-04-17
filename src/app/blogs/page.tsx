import { getPublishedPosts } from '@/lib/notion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogList from '@/components/sections/BlogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Engineering & Architecture Blog",
  description: "Technical journal about software engineering, architectural decisions, and building scalable enterprise systems.",
};

export const revalidate = 60; // Revalidate every minute

export default async function BlogIndex() {
  const posts = await getPublishedPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <BlogList posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
