
import Link from 'next/link';
import { db } from '../db';

export default async function HomePage() {
  const wines = await db.wines.getAll();
  const featuredWines = wines.filter(w => w.is_featured).slice(0, 3);

  return (
    <div className="overflow-hidden bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop" 
            alt="Moody Wine Cellar" 
            className="w-full h-full object-cover opacity-30 grayscale scale-110"
            style={{ filter: 'brightness(0.5) contrast(1.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-block mb-6 overflow-hidden">
            <span className="block text-burgundy text-xs uppercase tracking-[0.5em] font-bold">
              Est. 2014 • Chelsea, NYC
            </span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black font-serif text-white tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
            PURITY <br/> OVER <span className="text-burgundy italic font-normal">PRESTIGE.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            A sanctuary for low-intervention wines, biodynamic spirits, and clean drinking culture in the industrial heart of Manhattan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/wines" className="group relative px-12 py-5 overflow-hidden bg-burgundy text-white text-[10px] uppercase tracking-[0.2em] font-black transition-all">
              <span className="relative z-10">Explore the Cellar</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link href="/destinations" className="text-white text-[10px] uppercase tracking-[0.2em] font-black border-b border-white/20 pb-2 hover:border-burgundy hover:text-burgundy transition-all">
              Visit the Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="text-burgundy text-xs uppercase tracking-[0.3em] font-bold mb-4 block">New Arrivals</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">Hand-Picked Vintages.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {featuredWines.map((wine) => (
              <div key={wine.id} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#151515] border border-white/5 shadow-2xl">
                  <img 
                    src={wine.image_url} 
                    alt={wine.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                     <button className="w-full py-4 bg-white text-black text-[10px] uppercase tracking-widest font-black">View Bottle</button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-3xl font-serif text-white">{wine.name}</h3>
                    <span className="text-burgundy font-bold">${wine.price}</span>
                  </div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{wine.origin} • {wine.vintage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
