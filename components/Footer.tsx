import React from 'react';
import Link from 'next/link';
import { FALLBACK_SETTINGS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 py-24 px-6 mt-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-black serif text-white tracking-tighter mb-8 italic">Death Ave <br/> Wines</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
            Chelsea's premier destination for low-intervention, boutique wines and clean spirits. Curating the eclectic for the conscious enthusiast.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-burgundy mb-8">Navigation</h4>
          <ul className="space-y-4 text-xs uppercase tracking-widest font-bold">
            <li><Link href="/wines" className="text-gray-400 hover:text-white transition-colors">The Cellar</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Our Origin</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Tastings</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-burgundy mb-8">Visit Us</h4>
          <div className="space-y-6 text-sm">
            <p className="text-gray-400 font-light">{FALLBACK_SETTINGS.address}</p>
            <p className="text-white font-bold">{FALLBACK_SETTINGS.phone}</p>
            <div className="pt-4 space-y-2">
              {Object.entries(FALLBACK_SETTINGS.hours).map(([day, hrs]) => (
                <div key={day} className="flex justify-between text-xs text-gray-500">
                  <span>{day}</span>
                  <span>{hrs}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-burgundy mb-8">Newsletter</h4>
          <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest font-bold">Never miss a vintage.</p>
          <div className="flex border-b border-white/10 pb-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent text-white text-[10px] uppercase tracking-widest w-full focus:outline-none"
            />
            <button className="text-[10px] uppercase tracking-widest font-black text-white hover:text-burgundy transition-colors">Join</button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[8px] uppercase tracking-[0.5em] text-gray-700 font-bold">
        <p>&copy; {new Date().getFullYear()} Death Ave Wines. Crafted for the conscious.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}