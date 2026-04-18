'use client';

import { useI18n } from '@/lib/i18n';

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-32 relative bg-foreground/[0.01]">
      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="mb-24">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6">
            {t.sections.projects.title}
          </h2>
          <p className="text-5xl md:text-7xl font-black tracking-tighter text-foreground max-w-4xl leading-[1]">
            {t.sections.projects.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {t.projects.map((project, index) => (
            <div 
              key={index} 
              className="glass group relative overflow-hidden rounded-[3rem] p-12 transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_0_100px_rgba(10,132,255,0.1)] border-border-subtle hover:border-accent/20"
            >
              <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-8">
                  <div className="flex flex-wrap gap-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-xl bg-accent/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-accent border border-accent/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-xl leading-relaxed text-foreground/50 font-medium">
                    {project.description}
                  </p>
                  <div className="pt-6">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-accent/40 mb-4 block">
                      {t.sections.projects.impactLabel}
                    </span>
                    <div className="relative p-6 rounded-2xl bg-accent/[0.03] border-l-4 border-accent overflow-hidden">
                      <p className="text-sm font-bold text-foreground/80 relative z-10 leading-relaxed">
                        {project.impact}
                      </p>
                      <div className="absolute top-0 right-0 p-2 text-accent/5 font-serif text-8xl leading-none select-none">
                        &quot;
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[450px]">
                  <div className="aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-accent/10 to-transparent border border-border-subtle flex flex-col items-center justify-center group-hover:from-accent/20 transition-all duration-700">
                    <div className="text-accent/40 font-black text-xs uppercase tracking-widest mb-2">Case Study</div>
                    <div className="text-foreground/20 font-serif italic text-3xl">Architectural Map</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
