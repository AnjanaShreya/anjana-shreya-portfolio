import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-primary-dark/50 py-16 md:py-24 border-t border-white/5 cursor-default"
    >
      {/* Decorative radial grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Upper layout: Statement block paired with a floating blue button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// THE DEVELOPER</span>
            
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
              I am a frontend developer specializing in interactive user experiences & clean architectures.
            </h2>
            
            <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-3xl">
              I build responsive modern web applications featuring modular logic, robust type checking, and fluid interactive animations. Focusing on code craftsmanship and optimal client performance, I translate requirements into high-contrast digital experiences.
            </p>
          </div>

          {/* Social Links Widget in place of Get My Resume */}
          <div className="lg:col-span-4 flex lg:justify-end items-center pt-4 lg:pt-12">
            <div className="flex flex-row lg:flex-col gap-4 items-center">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest lg:rotate-90 lg:my-8 lg:-translate-y-2 select-none">// Connect with me</span>
              
              <motion.a
                href="https://github.com/AnjanaShreya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white text-neutral-400 hover:text-black flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-white/5 cursor-pointer"
              >
                <Github className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ch-s-anjana-shreya-68a74628a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] hover:bg-accent-blue text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-accent-blue/10 cursor-pointer"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="mailto:chitturianjana@gmail.com"
                whileHover={{ scale: 1.15, y: -4 }}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] hover:bg-accent-pink text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-accent-pink/10 cursor-pointer"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
