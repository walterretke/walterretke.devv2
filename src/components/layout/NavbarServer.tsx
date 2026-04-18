import { getPublishedPosts } from '@/lib/notion';
import NavbarClient from './NavbarClient';

export default async function Navbar() {
  let showBlog = false;
  try {
    const posts = await getPublishedPosts();
    showBlog = posts.length > 0;
  } catch (e) {
    console.error('Failed to fetch posts for navbar:', e);
  }

  return <NavbarClient showBlog={showBlog} />;
}
