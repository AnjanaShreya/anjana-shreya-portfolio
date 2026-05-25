import { motion } from "motion/react";
import { ArrowDown, Stars, Terminal, ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollToWorks = () => {
    const el = document.getElementById("works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const tickerOne = ["REACT", "TYPESCRIPT", "MOTION", "DEVELOPMENT", "WEB ART", "INTERACTIVE"];
  const tickerTwo = ["UI/UX EXCELLENCE", "DATAVIS", "D3.JS", "WEBGL", "MINIMALIST", "2026"];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-primary-dark pt-12 pb-16 cursor-default"
    >
      {/* Absolute background huge text logo "ANJANA SHREYA" */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.015] z-0 font-syne font-extrabold text-[14vw] mt-20 tracking-wider leading-none uppercase">
        ANJANA SHREYA
      </div>

      {/* Decorative colored visual orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-accent-blue/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-accent-pink/10 blur-[120px] pointer-events-none -z-10" />

      {/* Dual bidirectional marquees from Screen 1 */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 hidden md:block">
        {/* Left marquee */}
        <div className="relative overflow-hidden w-full h-[6rem] opacity-25 select-none pointer-events-none">
          <div className="animate-marquee whitespace-nowrap flex py-2 border-y border-white/5 font-syne font-black text-6xl text-stroke-white tracking-widest leading-none">
            {Array(6).fill(tickerOne).flat().map((word, idx) => (
              <span key={idx} className="mx-8">
                {word} <span className="text-white/20 select-none ml-8">/</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right marquee (reverse) */}
        <div className="relative overflow-hidden w-full h-[6rem] opacity-20 select-none pointer-events-none mt-4">
          <div className="animate-marquee-reverse whitespace-nowrap flex py-2 border-y border-white/5 font-syne font-black text-6xl text-stroke-white tracking-widest leading-none">
            {Array(6).fill(tickerTwo).flat().map((word, idx) => (
              <span key={idx} className="mx-8">
                {word} <span className="text-white/20 select-none ml-8">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 w-full flex flex-col items-center justify-center text-center relative z-10 py-12 mt-20">
        
        {/* Centered info - Developer focus */}
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 justify-center"
          >
            <span className="h-px w-8 bg-accent-pink" />
            <span className="font-mono text-xs text-accent-pink uppercase tracking-widest flex items-center gap-1">
              <Stars className="h-3 w-3" /> Professional Frontend Developer
            </span>
            <span className="h-px w-8 bg-accent-pink" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-syne font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white leading-[0.95]"
          >
            Crafting sleek <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-400">
              interactive
            </span>{" "}
            web apps.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            {/* <button
              onClick={handleScrollToWorks}
              className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors duration-300 flex items-center gap-2 group shadow-xl shadow-white/5"
            >
              [ EXPLORE PORTFOLIO ]
              <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-1 transition-transform" />
            </button> */}

            <button
              onClick={() => {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-full border border-white/10 hover:border-white text-white font-mono text-xs uppercase tracking-widest transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>
        </div>

      </div>

      {/* Slide indicator chevron */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 select-none text-neutral-500 hover:text-white transition-colors cursor-pointer" onClick={handleScrollToWorks}>
        <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-600">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
