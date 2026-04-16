'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 border border-accent/20 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="font-sans text-6xl font-black tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.9]">
              {t.hero.title} <br className="hidden md:block" />
              <span className="text-gradient">{t.hero.titleAccent}</span>
            </h1>
            
            <p className="mt-10 text-lg md:text-xl leading-relaxed text-foreground/50 max-w-2xl mx-auto lg:mx-0 font-medium">
              {t.hero.description}
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href="#projects"
                className="group relative flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-accent px-10 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20"
              >
                <span className="relative z-10 text-xs font-black uppercase tracking-widest text-white">
                  {t.hero.viewProjects}
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              
              <a 
                href="#experience" 
                className="flex h-14 items-center justify-center rounded-2xl glass border border-border-subtle px-10 text-xs font-black uppercase tracking-widest text-foreground hover:bg-foreground/5 transition-all active:scale-95"
              >
                {t.hero.readStory}
              </a>
            </div>

            {/* Social Proof / Key Stats */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-border-subtle pt-12">
              <div className="space-y-1">
                <p className="text-2xl font-black text-foreground">Global</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{t.socialProof.global}</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-foreground">Cloud-Native</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{t.socialProof.scale}</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-foreground">Full-Cycle</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{t.socialProof.stack}</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex-shrink-0 lg:w-[500px]">
            <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(10,132,255,0.15)] group">
              <Image
                src="/perfi-s-fundo.png"
                alt="Walter Manske"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            
            {/* Abstract decor elements */}
            <div className="absolute -right-10 -top-10 h-40 w-40 bg-accent/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute -left-10 -bottom-10 h-40 w-40 bg-accent/10 rounded-full blur-[80px] -z-10 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
