
import React from 'react';
import { FALLBACK_SERVICES } from '../../constants';

export default function ServicesPage() {
  return (
    <div className="pt-40 pb-24">
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-3xl mb-20">
          <span className="text-burgundy text-xs uppercase tracking-[0.3em] font-bold">Offerings</span>
          <h1 className="text-6xl md:text-8xl font-serif italic text-white mt-4">Beyond the <br/> Bottle.</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {FALLBACK_SERVICES.map((service, idx) => (
            <div key={service.id} className={`space-y-8 ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}>
              <div className="aspect-[4/3] bg-[#1a1a1a] overflow-hidden group">
                <img src={service.image_url} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif italic text-white">{service.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">{service.description}</p>
              <button className="px-8 py-3 border border-white/20 text-[10px] uppercase tracking-widest font-black hover:bg-white hover:text-black transition-all">
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111] py-32 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white italic">Private Tasting Experiences</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Unlock the secrets of terroir with a custom-tailored tasting session. Perfect for corporate teams, intimate celebrations, or serious enthusiasts looking to dive deep into a specific region.
            </p>
            <div className="flex justify-center gap-6">
              <a href="mailto:events@deathavewines.com" className="bg-burgundy text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest hover:bg-red-900 transition-colors">
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
