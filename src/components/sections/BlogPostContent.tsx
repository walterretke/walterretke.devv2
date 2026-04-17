'use client';

import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useI18n } from '@/lib/i18n';
import remarkGfm from 'remark-gfm';

interface BlogPostContentProps {
  post: {
    id: string;
    title?: string;
    date?: string;
    summary?: string;
    content: string; 
  };
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const { t, locale } = useI18n();

  return (
    <article className="relative py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href={`/${locale}/blogs`}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent mb-12 hover:-translate-x-1 transition-transform"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
              <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t.sections.blog.backToBlog}
          </Link>

          <header className="mb-20 border-b border-border-subtle pb-16">
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-10 leading-[1.0] text-balance">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-y-6 gap-x-10">
              <Link href={`/${locale}/#hero`} className="flex items-center gap-4 group transition-all">
                <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-accent/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  {/* Distinct background for the photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 -z-10" />
                  <Image
                    src="/perfi-s-fundo.png"
                    alt="Walter Manske"
                    fill
                    sizes="56px"
                    className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest group-hover:text-accent transition-colors">Walter Manske</p>
                  <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest">Software Engineer</p>
                </div>
              </Link>
              
              <div className="hidden sm:block h-8 w-px bg-border-subtle" />
              
              <div className="flex flex-col gap-1">
                <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest">{t.sections.blog.publishedAt}</p>
                <span className="text-[11px] font-black uppercase tracking-widest text-foreground/60">
                  {post.date ? new Date(post.date).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                </span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16">
            <div className="prose prose-invert prose-base max-w-none 
              prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h1:text-4xl prose-h1:mb-8
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-foreground/80 prose-p:leading-[1.7] prose-p:text-justify md:prose-p:text-left prose-p:mb-6 prose-p:font-medium
              prose-strong:text-foreground prose-strong:font-black
              prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:text-[0.9em]
              prose-pre:bg-[#050505] prose-pre:border prose-pre:border-border-subtle prose-pre:rounded-2xl prose-pre:p-6 prose-pre:shadow-xl
              prose-blockquote:border-l-[4px] prose-blockquote:border-l-accent prose-blockquote:bg-accent/5 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-foreground/90 prose-blockquote:my-8
              prose-img:rounded-3xl prose-img:border prose-img:border-border-subtle prose-img:shadow-[0_20px_50px_rgba(0,0,0,0.3)] prose-img:my-12
              prose-a:text-accent prose-a:no-underline prose-a:font-bold prose-a:border-b prose-a:border-accent/30 hover:prose-a:border-accent transition-all
              prose-li:text-foreground/80 prose-li:mb-2 prose-li:marker:text-accent
              prose-ul:my-6 prose-ol:my-6
              prose-hr:border-border-subtle prose-hr:my-12
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            {/* Optional Sidebar for metadata or quick links */}
            <aside className="hidden xl:block w-64 space-y-12">
              <div className="sticky top-40 space-y-10">
                <div className="p-6 rounded-3xl glass border border-border-subtle">
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-4">Engineering Focus</p>
                  <p className="text-xs text-foreground/50 leading-relaxed font-medium">
                    {post.summary || "This technical analysis explores modern architectural patterns and implementation strategies for scalable systems."}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}
