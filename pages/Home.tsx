
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../db';
import { Wine, AppSettings } from '../types';
import SEO from '../components/SEO';
import { WineSkeleton } from '../components/Skeleton';

const Home: React.FC = () => {
  const [featuredWines, setFeaturedWines] = useState<Wine[]>([]);
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [w, s] = await Promise.all([db.wines.getAll(), db.settings.get()]);
        setFeaturedWines(w.filter(wine => wine.is_featured).slice(0, 3));
        setSettings(s);
      } catch (e) {
        console.error("DB Fetch Error", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="overflow-hidden bg-[#0a0a0a]">
      <SEO title="Home" description="Conscious drinking in NYC. Discover curated low-intervention wines." />
      
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
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
            <span className="block text-burgundy text-xs uppercase tracking-[0.5em] font-bold animate-slide-down">
              Est. 2014 • Chelsea, NYC
            </span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black serif text-white tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
            PURITY <br/> OVER <span className="text-burgundy italic font-normal">PRESTIGE.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            A sanctuary for low-intervention wines, biodynamic spirits, and clean drinking culture in the industrial heart of Manhattan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/wines" className="group relative px-12 py-5 overflow-hidden bg-burgundy text-white text-[10px] uppercase tracking-[0.2em] font-black transition-all">
              <span className="relative z-10">Explore the Cellar</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link to="/destinations" className="text-white text-[10px] uppercase tracking-[0.2em] font-black border-b border-white/20 pb-2 hover:border-burgundy hover:text-burgundy transition-all">
              Visit the Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-burgundy text-xs uppercase tracking-[0.3em] font-bold mb-4 block">New Arrivals</span>
              <h2 className="text-5xl md:text-7xl serif text-white italic leading-tight">Hand-Picked <br/> Vintages.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {loading ? (
              [1, 2, 3].map(i => <WineSkeleton key={i} />)
            ) : (
              featuredWines.map((wine) => (
                <div key={wine.id} className="group relative">
                  <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#151515] border border-white/5 shadow-2xl">
                    <img 
                      src={wine.image_url} 
                      alt={wine.name} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                       <button className="w-full py-4 bg-white text-black text-[10px] uppercase tracking-widest font-black">View Bottle</button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-3xl serif text-white">{wine.name}</h3>
                      <span className="text-burgundy font-bold">${wine.price}</span>
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">{wine.origin} • {wine.vintage}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Philosophy Split */}
      <section className="bg-[#111] py-32 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 border border-burgundy/20 translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=1974&auto=format&fit=crop" 
              alt="Industrial Details" 
              className="relative z-10 grayscale brightness-75 shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <span className="text-burgundy text-xs uppercase tracking-[0.3em] font-bold">The Mission</span>
            <h2 className="text-6xl md:text-8xl serif text-white italic leading-[0.9]">Rooted in <br/> Honesty.</h2>
            <p className="text-gray-400 text-xl leading-relaxed font-light">
              "We believe wine should taste like the soil it came from. No heavy pesticides, no corrective chemistry, just the raw expression of terroir and the hands that tended it."
            </p>
            <div className="pt-6">
              <span className="text-white font-bold block mb-1">Michael Tzezailidis</span>
              <span className="text-gray-600 text-xs uppercase tracking-widest italic">Founder, Death Ave Wines</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Placeholder Feed */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl serif text-white italic mb-4">Follow the Journey</h2>
            <a href="#" className="text-burgundy uppercase tracking-widest text-[10px] font-bold">@deathavewines</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="aspect-square bg-[#1a1a1a] grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer overflow-hidden">
                 <img src={`https://picsum.photos/seed/ig${i}/800/800`} className="w-full h-full object-cover" alt="IG feed" />
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
