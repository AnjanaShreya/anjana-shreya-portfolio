import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Compass, Code, Server, Terminal } from "lucide-react";
import resumePdf from "../assets/Anjana shreya .pdf";

export default function About() {
  const [hoveredBadge, setHoveredBadge] = useState(false);

  const pillars = [
    {
      icon: <Code className="h-5 w-5 text-accent-pink" />,
      title: "Frontend",
      description: "React.js, JavaScript (ES6+), TypeScript, Redux Toolkit, Material UI, Highcharts"
    },
    {
      icon: <Server className="h-5 w-5 text-accent-blue" />,
      title: "Backend (Exposure)",
      description: "Node.js, Express.js, MongoDB, WebSockets, GraphQL"
    },
    {
      icon: <Terminal className="h-5 w-5 text-yellow-500" />,
      title: "Testing & Tools",
      description: "Jest, React Testing Library, Git, GitHub, Chrome DevTools, Figma, Mixpanel, Postman"
    }
  ];

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

          {/* Glowing About Us blue badge - inspired by Screen 6 circular button */}
          <div className="lg:col-span-4 flex lg:justify-end items-center pt-4 lg:pt-12">
            <motion.a
              id="floating-about-badge"
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredBadge(true)}
              onMouseLeave={() => setHoveredBadge(false)}
              animate={{
                scale: hoveredBadge ? 1.05 : 1,
                rotate: hoveredBadge ? 15 : 0,
              }}
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-accent-blue flex flex-col justify-center items-center text-center p-3 text-white shadow-xl shadow-accent-blue/20 cursor-pointer group focus:outline-none shrink-0 no-underline"
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-white/20 animate-spin-slow"
                style={{ borderStyle: "dashed" }}
              />
              <Compass className="h-5 w-5 mb-1 text-white/85" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">GET MY</span>
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">RESUME</span>
            </motion.a>
          </div>

        </div>
      </div>

      {/* Full-width edge-to-edge horizontal divider line */}
      <div className="w-full border-t border-white/10 my-16 md:my-24" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Middle Asset Section: Framed iPad/Device mockup display inspired by Screen 6 */}
        {/* <div className="relative mt-12 md:mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-primary-dark/10 mix-blend-multiply z-10 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-10 bg-neutral-900/90 border-b border-white/15 flex items-center justify-between px-4 z-20">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[10px] font-mono text-neutral-400 capitalize bg-black/40 px-6 py-0.5 rounded-full border border-white/5">
              https://anjana-shreya.dev/workspace
            </div>
            <div className="w-8" />
          </div>

          <div className="h-[250px] sm:h-[400px] md:h-[500px] w-full relative group overflow-hidden pt-10">
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=1200&auto=format&fit=crop"
              alt="Frontend development workstation environment showing responsive source code layout"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur-md border border-white/10 p-3 rounded-lg z-20 flex items-center gap-3 font-mono text-[10px] tracking-wide text-neutral-300">
              <span className="animate-pulse h-1.5 w-1.5 rounded-full bg-white" />
              <span>THEORETICAL MODEL v1.08</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-accent-pink" />
            </div>
          </div>
        </div> */}

        {/* Skills Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// MY TOOLKIT & STACK</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1">
              Skills
            </h2>
          </div>
        </div>

        {/* Lower layout: Core values pillars block (modular grids) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {pillars.map((pi, idx) => (
            <div
              key={idx}
              className="interactive-card flex flex-col p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/15 transition-all duration-300 gap-4 group"
            >
              <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/15 transition-colors">
                {pi.icon}
              </div>
              <h3 className="font-display font-medium text-lg text-white group-hover:text-accent-pink transition-colors">
                {pi.title}
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {pi.description.split(", ").map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded border border-white/5 bg-white/[0.01] group-hover:bg-white/[0.03] group-hover:border-white/10 text-neutral-200 group-hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
