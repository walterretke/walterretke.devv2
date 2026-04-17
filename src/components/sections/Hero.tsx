'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t, locale } = useI18n();

  return (
    <section className="relative pt-32 pb-16 md:pt-56 md:pb-32 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-20">
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 border border-accent/20 mb-6 md:mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-accent">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="font-sans text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter text-foreground leading-[0.95] md:leading-[0.9]">
              {t.hero.title} <br className="hidden md:block" />
              <span className="text-gradient">{t.hero.titleAccent}</span>
            </h1>
            
            <p className="mt-8 md:mt-10 text-base md:text-xl leading-relaxed text-foreground/50 max-w-2xl mx-auto lg:mx-0 font-medium">
              {t.hero.description}
            </p>
            
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
              <a
                href={`/${locale}/#projects`}
                className="w-full sm:w-auto group relative flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-accent px-10 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20"
              >
                <span className="relative z-10 text-xs font-black uppercase tracking-widest text-white">
                  {t.hero.viewProjects}
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              
              <a 
                href={`/${locale}/#experience`} 
                className="w-full sm:w-auto flex h-14 items-center justify-center rounded-2xl glass border border-border-subtle px-10 text-xs font-black uppercase tracking-widest text-foreground hover:bg-foreground/5 transition-all active:scale-95"
              >
                {t.hero.readStory}
              </a>
            </div>
          </div>
          
          {/* Right Column: Photo + Metrics + Slider */}
          <div className="relative flex-shrink-0 w-full max-w-[450px] md:max-w-[550px] lg:w-[550px] space-y-8 md:space-y-12">
            <div className="relative aspect-square w-full group">
              {/* Soft Ambient Glows behind the subject */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] bg-accent/20 rounded-full blur-[100px] md:blur-[120px] -z-10 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[80%] bg-accent/10 rounded-full blur-[60px] md:blur-[80px] -z-10 animate-pulse delay-1000" />
              
              <div className="relative h-full w-full [mask-image:radial-gradient(circle_at_center,black_30%,transparent_85%)]">
                <Image
                  src="/perfi-s-fundo.png"
                  alt="Walter Manske"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover scale-[1.15] md:scale-105 transition-transform duration-700 group-hover:scale-[1.2] md:group-hover:scale-110"
                />
              </div>
            </div>

            {/* Combined Metrics and Tech Slider under the photo */}
            <div className="glass rounded-[2rem] p-6 md:p-8 border border-border-subtle overflow-hidden mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-10">
                {/* Metrics */}
                <div className="flex gap-8 md:gap-6 shrink-0 sm:border-r border-border-subtle sm:pr-8 md:pr-10">
                  <div className="text-center">
                    <p className="text-base md:text-lg font-black text-foreground">Global</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-foreground/40">{t.socialProof.global.split(' ')[0]}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-base md:text-lg font-black text-foreground">Cloud</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-foreground/40">Native</p>
                  </div>
                  <div className="text-center sm:hidden">
                    <p className="text-base md:text-lg font-black text-foreground">Full</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-foreground/40">Cycle</p>
                  </div>
                </div>

                {/* Infinite Icon Slider */}
                <div className="relative flex-1 flex items-center overflow-hidden h-8 md:h-10 w-full">
                  <div className="flex gap-10 md:gap-12 animate-[scroll_25s_linear_infinite] w-max items-center">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex gap-10 md:gap-12 items-center">
                        {/* Monochromatic Icons (Standard SVGs) */}
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-foreground/20 hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z"/>
                        </svg>
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-foreground/20 hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2 10h20v4H2V10zm2 2h2v1H4v-1zm4 0h2v1H8v-1z"/>
                        </svg>
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-foreground/20 hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
                        </svg>
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-foreground/20 hover:text-accent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
                        </svg>
                      </div>
                    ))}
                  </div>
                  {/* Edge Fades */}
                  <div className="absolute inset-y-0 left-0 w-8 md:w-10 bg-gradient-to-r from-background/80 to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-8 md:w-10 bg-gradient-to-l from-background/80 to-transparent z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
