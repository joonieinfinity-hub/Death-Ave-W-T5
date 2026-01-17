
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32">
      {/* Story Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
            <img src="https://picsum.photos/seed/story/1000/1200?grayscale" alt="Michael Tzezailidis" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-10">
            <div>
              <span className="text-burgundy text-xs uppercase tracking-[0.3em] font-bold">The Origin</span>
              <h1 className="text-6xl md:text-8xl serif italic text-white mt-4">Purity over <br/> Prestige.</h1>
            </div>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Death Ave Wines was born from a simple observation: the wine world had become too obsessed with points, labels, and mass production, losing the soul of the vineyard.
              </p>
              <p>
                Founder Michael Tzezailidis, inspired by the industrial grit of NYC's past and the organic honesty of traditional winemaking, set out to create a sanctuary for "living wines."
              </p>
              <p className="font-bold text-white italic serif">
                "We don't just sell bottles; we advocate for a cleaner, more conscious way of drinking."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white text-black py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl serif italic mb-12">The Clean Culture.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-burgundy">01. Low Intervention</h4>
              <p className="text-gray-600">Minimal additives, native yeast fermentation, and zero industrial tampering. The wine as nature intended.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-burgundy">02. Niche Terroir</h4>
              <p className="text-gray-600">We source from small family estates that respect the soil and prioritize biodiversity over bottom lines.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-burgundy">03. Curated Community</h4>
              <p className="text-gray-600">A space for enthusiasts and novices alike to learn about the farmers behind the glass.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#121212]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl serif italic text-white text-center mb-20">The Curators.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="aspect-square bg-[#1a1a1a] mb-8 overflow-hidden">
                 <img src="https://picsum.photos/seed/team1/600/600?grayscale" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl serif text-white">Michael Tzezailidis</h3>
              <p className="text-burgundy text-xs uppercase tracking-widest mt-2">Founder & Visionary</p>
            </div>
            <div className="text-center group">
              <div className="aspect-square bg-[#1a1a1a] mb-8 overflow-hidden">
                 <img src="https://picsum.photos/seed/team2/600/600?grayscale" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl serif text-white">The Sommelier</h3>
              <p className="text-burgundy text-xs uppercase tracking-widest mt-2">10+ Years Industry Expert</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
