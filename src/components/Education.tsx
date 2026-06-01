import { EDUCATION, ACADEMIC_FOCUS, COURSEWORK_TAGS } from "../data";

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-primary-dark/40 py-16 md:py-24 border-t border-white/5 cursor-default"
    >
      {/* Decorative radial grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Education Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// ACADEMIC FOUNDATION</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1">
              Education
            </h2>
          </div>
        </div>

        {/* Creative Education Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Timeline Card */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div 
                key={idx}
                className="relative pl-8 border-l border-white/10 hover:border-accent-pink/40 transition-colors duration-300 group py-2"
              >
                {/* Timeline node */}
                <div className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-neutral-800 border border-white/20 group-hover:bg-accent-pink group-hover:border-accent-pink group-hover:shadow-[0_0_10px_rgba(244,114,182,0.6)] transition-all duration-300" />
                
                <div className="bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/15 p-6 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col gap-2 shadow-2xl shadow-black/40">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <span className="font-mono text-[10px] text-accent-blue tracking-wider uppercase block">{edu.period}</span>
                      <h3 className="font-display font-medium text-lg text-white group-hover:text-accent-pink transition-colors mt-0.5">
                        {edu.degree}
                      </h3>
                    </div>
                    {edu.grade && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded border border-accent-pink/20 bg-accent-pink/5 text-accent-pink uppercase tracking-widest shrink-0 font-bold">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-neutral-400 text-xs font-light">
                    {edu.institution}
                  </p>
                  
                  {edu.details && (
                    <ul className="list-none space-y-2 mt-3">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-neutral-400 group-hover:text-neutral-300 transition-colors text-[11px] font-light flex items-start gap-2 leading-relaxed">
                          <span className="text-accent-pink font-bold font-mono shrink-0 select-none">›</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Specializations, Key Coursework & Focus Areas Panel */}
          <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-colors relative overflow-hidden group shadow-2xl shadow-black/40">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-pink/5 blur-[50px] pointer-events-none -z-10 group-hover:bg-accent-pink/10 transition-all duration-500" />
            
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// AREAS OF STUDY</span>
                <h3 className="font-syne font-bold text-xl text-white tracking-tight mt-1">
                  Academic Focus
                </h3>
              </div>
              
              <div className="space-y-5">
                {ACADEMIC_FOCUS.map((item, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <div className="h-6 w-6 rounded bg-white/5 border border-white/5 flex items-center justify-center font-mono text-[10px] text-accent-pink font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-xs text-neutral-200">{item.title}</h4>
                      <p className="text-neutral-500 text-[10px] font-light mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-1.5">
              {COURSEWORK_TAGS.map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-[9px] font-mono px-2 py-0.5 rounded border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] text-neutral-400 hover:text-white transition-all duration-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
