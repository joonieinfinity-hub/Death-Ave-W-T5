
import { db } from '@/lib/db';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Collection | Death Ave Wines',
  description: 'Browse our curated cellar of low-intervention and biodynamic wines.',
};

export default async function WinesPage() {
  const wines = await db.wines.getAll();

  return (
    <div className="pt-40 pb-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <h1 className="text-7xl md:text-9xl serif italic text-white tracking-tighter mb-8 leading-[0.8]">The Cellar.</h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-lg">
              Every bottle in our shop is selected for its integrity, character, and the commitment of the producer to cleaner viticulture.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {wines.map((wine) => (
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
      </div>
    </div>
  );
}
