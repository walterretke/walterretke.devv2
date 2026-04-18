'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import { PERSONAL_INFO } from '@/data/constants';

export default function Navbar({ showBlog }: { showBlog: boolean }) {
  const { t, locale, setLocale } = useI18n();
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between glass h-16 rounded-2xl px-8 shadow-2xl shadow-black/10">
        <div className="flex items-center gap-12">
          <Link href={`/${locale}`} className="font-sans text-xl font-black tracking-tighter">
            W.<span className="text-accent">MANSKE</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link href={`/${locale}/#projects`} className="text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-accent transition-all">
              {t.nav.projects}
            </Link>
            <Link href={`/${locale}/#stack`} className="text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-accent transition-all">
              {t.nav.stack}
            </Link>
            <Link href={`/${locale}/#experience`} className="text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-accent transition-all">
              {t.nav.experience}
            </Link>
            {showBlog && (
              <Link href={`/${locale}/blogs`} className="text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-accent transition-all">
                {t.nav.blog}
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 border-r border-border-subtle pr-6 mr-2">
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-accent transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 3.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-accent transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-foreground hover:bg-accent hover:text-white transition-all active:scale-95"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : mounted && theme === 'light' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <div className="w-4 h-4" /> // Placeholder to maintain layout
            )}
          </button>

          <div className="flex items-center gap-1 rounded-full bg-foreground/5 p-1">
            <button
              onClick={() => setLocale('en')}
              className={`rounded-full px-3 py-1 text-[9px] font-black transition-all ${
                locale === 'en' ? 'bg-accent text-white' : 'text-foreground/30 hover:text-foreground/60'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale('pt')}
              className={`rounded-full px-3 py-1 text-[9px] font-black transition-all ${
                locale === 'pt' ? 'bg-accent text-white' : 'text-foreground/30 hover:text-foreground/60'
              }`}
            >
              PT
            </button>
          </div>
          
          <a
            href="mailto:waltermatheusrm@gmail.com"
            className="hidden sm:flex h-10 items-center justify-center rounded-xl bg-foreground px-6 text-[10px] font-black uppercase tracking-widest text-background hover:bg-accent hover:text-white transition-all active:scale-95"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
