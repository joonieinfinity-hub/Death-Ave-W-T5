import { db } from '@/lib/db';
import { Metadata } from 'next';
import WineFilter from './WineFilter';

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

        <WineFilter initialWines={wines} />
      </div>
    </div>
  );
}
