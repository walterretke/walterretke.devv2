'use client';

import { PERSONAL_INFO } from '@/data/constants';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { locale } = useI18n();
  
  return (
    <footer className="py-32 bg-background border-t border-border-subtle">
      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:items-end">
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-black tracking-tighter">
              W.<span className="text-accent">MANSKE</span>
            </h3>
            <p className="mt-6 text-lg text-foreground/40 font-medium max-w-sm">
              {locale === 'en' 
                ? 'Architecting high-performance enterprise systems for global organizations.' 
                : 'Arquitetando sistemas enterprise de alta performance para organizações globais.'}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Social</p>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-bold text-foreground/60 hover:text-accent transition-all"
              >
                LinkedIn
              </a>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Direct</p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block text-sm font-bold text-foreground/60 hover:text-accent transition-all"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">
            © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}
          </p>
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-foreground/[0.03] border border-border-subtle">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(10,132,255,0.5)]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/50">
              {locale === 'en' ? 'OPEN FOR GLOBAL COLLABORATION' : 'DISPONÍVEL PARA COLABORAÇÃO GLOBAL'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
