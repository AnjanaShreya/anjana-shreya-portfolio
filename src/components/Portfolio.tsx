import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, FolderOpen, Tag, Layers } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filterCategories = ["All", "React", "WebGL", "Sound API", "D3"];

  // Matches item tags/categories with direct filter label
  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "All") return true;
    return proj.category.toLowerCase().includes(filter.toLowerCase()) || 
           proj.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <section
      id="works"
      className="relative bg-primary-dark py-16 md:py-24 border-t border-white/5 cursor-default"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Gallery Header (Replicates Screen 7 typography composition) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-3">
            <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// ARCHIVE</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight shrink-0">
              Selected Works
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm max-w-lg font-light leading-relaxed">
              Explore premium design patterns, experimental browser apps, dynamic data visualizations, and fluid interactive custom animations.
            </p>
          </div>

          {/* Inline Filter node pills */}
          <div className="flex flex-wrap items-center gap-2 border border-white/10 p-1.5 rounded-full bg-white/[0.02]">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-white text-black font-semibold shadow-md"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project grid layout with AnimatePresence */}
        <motion.div
          id="project-items-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="interactive-card group relative flex flex-col rounded-xl overflow-hidden border border-white/5 bg-white/[0.01] hover:border-white/15 transition-all duration-300"
              >
                
                {/* Image Container with zoom parallax scale */}
                <div className="relative h-[250px] sm:h-[300px] w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105 saturate-95 group-hover:saturate-110"
                  />

                  {/* Project metadata pills over visual card */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="font-mono text-[8px] bg-black/75 backdrop-blur-md border border-white/10 text-neutral-300 px-2 py-0.5 rounded uppercase tracking-wider">
                      {project.year}
                    </span>
                    <span className="font-mono text-[8px] bg-black/75 backdrop-blur-md border border-white/10 text-accent-pink px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                      <Tag className="h-2 w-2" /> {project.category.split(" / ")[0]}
                    </span>
                  </div>

                  {/* Hover icon layout */}
                  <div className="absolute bottom-4 right-4 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg shadow-black/25">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Text overlay details block */}
                <div className="p-5 flex flex-col flex-grow justify-between gap-4 text-left">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <FolderOpen className="h-3 w-3 text-neutral-500" />
                      <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest leading-none">
                        Client : {project.client}
                      </span>
                    </div>

                    <h3 className="font-display font-medium text-lg md:text-xl text-white group-hover:text-accent-pink transition-colors tracking-tight leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 text-xs lines-clamped font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tag List */}
                  <div className="flex flex-wrap items-center gap-1.5 border-t border-white/5 pt-3">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono text-neutral-400 border border-white/5 px-2 py-0.5 rounded-md bg-white/[0.01]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating action banner at the bottom */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-neutral-500 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2">
            <Layers className="h-4 w-4 animate-bounce" /> No matching interactive project archives found.
          </div>
        )}

      </div>
    </section>
  );
}
