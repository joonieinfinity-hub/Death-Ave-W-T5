'use client';

import { useState } from 'react';
import { Wine } from '@/lib/types';

interface WineFilterProps {
  initialWines: Wine[];
}

export default function WineFilter({ initialWines }: WineFilterProps) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Red', 'White', 'Rosé', 'Orange', 'Sparkling'];

  const filteredWines = filter === 'All' 
    ? initialWines 
    : initialWines.filter(w => w.type === filter);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 text-[10px] uppercase tracking-widest font-black border transition-all duration-300 ${filter === cat ? 'bg-burgundy border-burgundy text-white' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {filteredWines.map((wine) => (
          <div key={wine.id} className="group flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#151515] border border-white/5">
              <img 
                src={wine.image_url} 
                alt={wine.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s] ease-out"
              />
              <div className="absolute top-4 left-4 bg-burgundy px-3 py-1 text-[8px] uppercase tracking-widest font-bold text-white">
                {wine.type}
              </div>
            </div>
            <div className="space-y-4 flex-grow flex flex-col">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl serif text-white italic group-hover:text-burgundy transition-colors">{wine.name}</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">{wine.origin}</p>
                </div>
                <span className="text-white font-bold">${wine.price}</span>
              </div>
              <p className="text-gray-400 text-sm italic font-light line-clamp-2 mt-auto">
                {wine.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredWines.length === 0 && (
        <div className="text-center py-40 border border-white/5 bg-[#111]">
          <p className="text-gray-500 italic text-xl">Our cellar is rotating. This category is temporarily empty.</p>
        </div>
      )}
    </>
  );
}
