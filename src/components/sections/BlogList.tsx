'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

interface Post {
  id: string;
  title: string | undefined;
  slug: string | undefined;
  date: string | undefined;
  preview: string | undefined;
}

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  const { t, locale } = useI18n();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-accent">Technical Journal</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight mb-8">
            {t.sections.blog.title}
          </h1>
          <p className="text-xl text-foreground/50 font-medium leading-relaxed max-w-2xl">
            {t.sections.blog.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link 
                key={post.id} 
                href={`/${locale}/blogs/${post.slug}`}
                className="group relative flex flex-col p-8 rounded-3xl glass border border-border-subtle hover:border-accent/30 transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30">
                      {post.date ? new Date(post.date).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'}
                    </span>
                    <div className="h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-serif font-bold tracking-tight mb-6 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-foreground/50 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                    {post.preview}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    {t.sections.blog.readMore}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center glass rounded-3xl border border-border-subtle">
              <p className="text-foreground/30 font-black uppercase tracking-[0.3em] text-[10px]">
                {locale === 'en' ? 'No technical articles found yet.' : 'Nenhum artigo técnico encontrado ainda.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
