import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import TechStack from '@/components/sections/TechStack';
import Experience from '@/components/sections/Experience';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
