'use client';

import { useI18n } from '@/lib/i18n';

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-32 bg-foreground/[0.01]">
      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-16">
              {t.sections.experience.title}
            </h2>
            <div className="space-y-24">
              {t.experience.map((exp, index) => (
                <div key={index} className="relative pl-16 group">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 to-transparent" />
                  <div className="absolute left-[-4px] top-0 h-2 w-2 rounded-full bg-accent shadow-[0_0_15px_rgba(10,132,255,0.5)] group-hover:scale-150 transition-transform duration-500" />
                  
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/60">{exp.period}</span>
                  <h3 className="mt-4 text-4xl font-black tracking-tighter text-foreground group-hover:text-accent transition-colors duration-500">
                    {exp.role}
                  </h3>
                  <p className="text-xl font-bold text-foreground/80 mt-2">{exp.company}</p>
                  
                  <ul className="mt-10 space-y-6">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-4 text-lg leading-relaxed text-foreground/50 font-medium">
                        <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-accent/30" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-16">
              {t.sections.experience.education}
            </h2>
            <div className="glass p-12 rounded-[3rem] border border-accent/10 relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 h-64 w-64 bg-accent/5 rounded-full blur-[100px] group-hover:bg-accent/10 transition-all duration-700" />
              
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/60">{t.education.period}</span>
              <h3 className="mt-6 text-3xl font-black tracking-tighter text-foreground leading-[1.1]">{t.education.degree}</h3>
              <p className="text-xl font-bold text-foreground/80 mt-4">{t.education.institution}</p>
              <div className="mt-8 inline-flex h-10 items-center rounded-xl bg-accent/5 border border-accent/10 px-6 text-[10px] font-black uppercase tracking-widest text-accent">
                {t.education.details}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
