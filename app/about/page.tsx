
export default function AboutPage() {
  return (
    <div className="pt-40">
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#151515] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1543412849-fd47265510d8?q=80&w=1000" alt="Founder" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-12">
            <div>
              <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold">The Origin</span>
              <h1 className="text-6xl md:text-8xl serif italic text-white mt-6">Purity over <br/> Prestige.</h1>
            </div>
            <div className="space-y-8 text-gray-400 leading-relaxed text-xl font-light">
              <p>
                Death Ave Wines was born from a simple observation: the wine world had become too obsessed with points, labels, and mass production, losing the soul of the vineyard.
              </p>
              <p>
                Founder Michael Tzezailidis, inspired by the industrial grit of NYC's past and the organic honesty of traditional winemaking, set out to create a sanctuary for "living wines."
              </p>
              <p className="font-bold text-white italic serif text-2xl border-l border-burgundy pl-10 py-4">
                "We don't just sell bottles; we advocate for a cleaner, more conscious way of drinking."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-40">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl serif italic mb-20">The Clean Culture.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-left">
            {[
              { title: "Low Intervention", desc: "Minimal additives, native yeast fermentation, and zero industrial tampering. The wine as nature intended." },
              { title: "Niche Terroir", desc: "We source from small family estates that respect the soil and prioritize biodiversity over bottom lines." },
              { title: "Curated Community", desc: "A space for enthusiasts and novices alike to learn about the farmers behind the glass." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-burgundy">0{i+1}. {item.title}</h4>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
