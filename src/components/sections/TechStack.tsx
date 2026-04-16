'use client';

import { useI18n } from '@/lib/i18n';
import { TECH_STACK } from '@/data/constants';

export default function TechStack() {
  const { t } = useI18n();

  return (
    <section id="stack" className="py-32 bg-background">
      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="mb-24 text-center lg:text-left">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6">
            {t.sections.stack.title}
          </h2>
          <p className="text-5xl md:text-7xl font-black tracking-tighter text-foreground max-w-3xl leading-[1]">
            {t.sections.stack.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {TECH_STACK.map((group) => (
            <div key={group.category} className="glass rounded-[3rem] p-10 border-border-subtle group hover:border-accent/30 transition-all duration-500">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-12">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {group.items.map((item) => (
                  <div key={item} className="flex h-12 items-center rounded-xl bg-foreground/[0.03] px-6 border border-border-subtle group-hover:bg-foreground/[0.05] transition-all">
                    <span className="text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
