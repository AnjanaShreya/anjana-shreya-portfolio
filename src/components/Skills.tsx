import { Code, Server, Terminal } from "lucide-react";

export default function Skills() {
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
      id="skills"
      className="relative bg-primary-dark/50 py-16 md:py-24 border-t border-white/5 cursor-default"
    >
      {/* Decorative radial grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
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
