import { INSIGHTS } from "../data";

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative bg-primary-dark/50 py-16 md:py-24 border-t border-white/5 cursor-default"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Insights Title header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// CREDENTIALS & RECOGNITIONS</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1">
              Certifications
            </h2>
          </div>
        </div>

        {/* List grid of articles matching INSIGHTS data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INSIGHTS.map((ins, idx) => (
            <article
              key={ins.id}
              className="interactive-card group flex flex-col rounded-xl overflow-hidden border border-white/5 bg-white/[0.01] hover:border-white/12 hover:bg-white/[0.02] transition-all duration-300 text-left"
            >

              {/* Card visual wrapper */}
              <div className="h-[200px] w-full overflow-hidden relative border-b border-white/5 bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />

                <img
                  src={ins.image}
                  alt={ins.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-90 group-hover:saturate-100"
                />
              </div>

              {/* Text content details inside article card */}
              <div className="p-5 flex flex-col justify-between flex-grow gap-5">
                <div className="space-y-3">
                  <h3 className="font-display font-medium text-lg text-white group-hover:text-accent-pink transition-colors tracking-tight leading-snug">
                    {ins.title}
                  </h3>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
