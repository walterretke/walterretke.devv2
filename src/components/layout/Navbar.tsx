'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Navbar() {
  const { t, locale, setLocale } = useI18n();

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between glass h-16 rounded-2xl px-8 shadow-2xl shadow-black/10">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-sans text-xl font-black tracking-tighter">
            W.<span className="text-accent">MANSKE</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/#projects" className="text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-accent transition-all">
              {t.nav.projects}
            </Link>
            <Link href="/#stack" className="text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-accent transition-all">
              {t.nav.stack}
            </Link>
            <Link href="/#experience" className="text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-accent transition-all">
              {t.nav.experience}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
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
