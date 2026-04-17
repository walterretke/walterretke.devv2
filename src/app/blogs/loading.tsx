'use client';

import { useI18n } from '@/lib/i18n';
import { useEffect, useState } from 'react';

const MESSAGES = {
  en: [
    "Brewing architectural insights...",
    "Heating up the JVM...",
    "Compiling technical thoughts...",
    "Hydrating with Java...",
    "Optimizing enterprise scale...",
    "Garbage collecting distractions...",
    "Warming up the servers..."
  ],
  pt: [
    "Preparando insights arquiteturais...",
    "Aquecendo a JVM...",
    "Compilando pensamentos técnicos...",
    "Hidratando com Java...",
    "Otimizando escala enterprise...",
    "Coletando lixo e distrações...",
    "Aquecendo os servidores..."
  ]
};

export default function Loading() {
  const { locale } = useI18n();
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES[locale].length);
    }, 2500);
    return () => clearInterval(interval);
  }, [locale]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="relative scale-[2]">
        {/* Steam Animation */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-1 h-8 bg-accent/20 rounded-full blur-[2px] animate-[steam_2s_infinite]" />
          <div className="w-1 h-10 bg-accent/30 rounded-full blur-[2px] animate-[steam_2s_infinite_0.4s]" />
          <div className="w-1 h-8 bg-accent/20 rounded-full blur-[2px] animate-[steam_2s_infinite_0.8s]" />
        </div>

        {/* Coffee Cup */}
        <div className="relative">
          {/* Cup Body */}
          <div className="relative w-16 h-12 border-[5px] border-foreground/10 rounded-b-[1.5rem] bg-background overflow-hidden z-10">
            {/* Coffee Liquid */}
            <div className="absolute bottom-0 left-0 w-full bg-accent animate-[fill-coffee_4s_ease-in-out_infinite] opacity-90 shadow-[0_0_20px_rgba(10,132,255,0.5)]" />
          </div>
          
          {/* Cup Handle */}
          <div className="absolute top-2 -right-5 w-7 h-8 border-[5px] border-foreground/10 rounded-r-2xl z-0" />
          
          {/* Saucer */}
          <div className="absolute -bottom-2 -left-2 w-20 h-1.5 bg-foreground/10 rounded-full" />
        </div>
      </div>

      {/* Localized Messages */}
      <div className="mt-32 flex flex-col items-center gap-6">
        <p className="text-[11px] font-black uppercase tracking-[0.5em] text-accent text-center animate-pulse">
          {MESSAGES[locale][messageIndex]}
        </p>
        
        {/* Progress Bar */}
        <div className="w-48 h-1 bg-foreground/5 rounded-full overflow-hidden">
          <div className="h-full bg-accent animate-[progress_3s_infinite_linear]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fill-coffee {
          0%, 100% { height: 15%; }
          50% { height: 75%; }
        }
        @keyframes steam {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          50% { opacity: 0.8; transform: translateY(-15px) scaleX(1.2); }
          100% { transform: translateY(-30px) scaleX(1.5); opacity: 0; }
        }
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
