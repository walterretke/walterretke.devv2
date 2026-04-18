import { getPublishedPosts } from '@/lib/notion';
import Navbar from '@/components/layout/NavbarServer';
import Footer from '@/components/layout/Footer';
import BlogList from '@/components/sections/BlogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Engineering & Architecture | Technical Blog",
  description: "Technical journal about software engineering, architectural decisions, and building scalable enterprise systems with Java and Next.js.",
  keywords: ["Software Engineering Blog", "System Architecture", "Java Technical Articles", "Next.js Best Practices", "Distributed Systems Design"],
  alternates: {
    canonical: '/blogs',
  }
};

export const revalidate = 3600; // Revalidate every hour

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
