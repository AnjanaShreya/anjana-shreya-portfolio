import { useState } from "react";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { PROCESS_STEPS } from "../data";

export default function Process() {
  const [activeStepIdx, setActiveStepIdx] = useState(0); // Default to first project

  return (
    <section
      id="projects"
      className="relative bg-primary-dark py-16 md:py-24 border-t border-white/5 cursor-default"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 pb-8">
          <div>
            <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// SELECTED CREATIONS</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1">
              Projects
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-mono text-2xl font-bold text-accent-pink">
              0{activeStepIdx + 1}
            </span>
            <span className="text-neutral-600">/</span>
            <span className="font-mono text-xs text-neutral-400">
              0{PROCESS_STEPS.length} CREATIONS
            </span>
          </div>
        </div>

        {/* Visual Workflow split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Vertical workflow steps navigator */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStepIdx === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer focus:outline-none ${
                    isSelected
                      ? "bg-white/[0.02] border-white/10 shadow-lg shadow-black/20"
                      : "bg-transparent border-transparent hover:bg-white/[0.01]"
                  }`}
                >
                  <span className={`font-mono text-xs px-2.5 py-1 rounded bg-white/5 shrink-0 ${
                    isSelected ? "text-accent-pink border border-accent-pink/20 bg-accent-pink/5" : "text-neutral-500"
                  }`}>
                    0{step.num}
                  </span>

                  <div className="space-y-2 text-left">
                    <h3 className={`font-display font-medium text-lg leading-none ${
                      isSelected ? "text-white" : "text-neutral-400"
                    }`}>
                      {step.title}
                    </h3>
                    {isSelected && (
                      <div className="space-y-3 pt-1 animate-fade-in">
                        <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                          {step.description}
                        </p>
                        {step.liveUrl && (
                          <a
                            href={step.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} // Prevent triggering parent button click
                            className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-accent-pink hover:text-white uppercase pt-1 border-b border-accent-pink/30 hover:border-white transition-all duration-300 w-fit"
                          >
                            View Live Project <ArrowUpRight className="h-3 w-3 shrink-0" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual display matching current active indexing step */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl flex items-center justify-center">
              
              {/* Overlay graphics */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-10" />
              
              <img
                src={PROCESS_STEPS[activeStepIdx].image}
                alt={PROCESS_STEPS[activeStepIdx].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out saturate-50 hover:saturate-100"
              />

              {/* Detailed specification list overlays */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {PROCESS_STEPS[activeStepIdx].details.map((detail, dIdx) => (
                    <span
                      key={dIdx}
                      className="font-mono text-[9px] bg-black/80 backdrop-blur-md border border-white/10 text-neutral-300 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                    >
                      <CheckCircle className="h-3 w-3 text-accent-pink shrink-0" /> {detail}
                    </span>
                  ))}
                </div>
                
                <span className="font-mono text-[9px] text-neutral-500 bg-black/50 backdrop-blur-sm px-2 py-1 rounded uppercase border border-white/5 hidden xs:block">
                  {PROCESS_STEPS[activeStepIdx].liveUrl ? "LIVE SYSTEM" : "ARCHIVED PROJECT"}
                </span>
              </div>
            </div>

            {/* Quick pagination arrows */}
            <div className="flex justify-between items-center w-full mt-6 text-xs text-neutral-400 font-mono">
              <button
                onClick={() => setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                className="hover:text-white transition-colors cursor-pointer"
              >
                ← PREV CREATION
              </button>
              <div className="flex gap-1.5">
                {PROCESS_STEPS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      activeStepIdx === i ? "bg-accent-pink w-4" : "bg-neutral-700"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveStepIdx((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
                className="hover:text-white transition-colors cursor-pointer"
              >
                NEXT CREATION →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

