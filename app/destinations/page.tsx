import React from 'react';
import { FALLBACK_SETTINGS } from '@/lib/constants';

export default function DestinationsPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-10">
            <div>
              <span className="text-burgundy text-xs uppercase tracking-[0.3em] font-bold">Visit Us</span>
              <h1 className="text-6xl md:text-8xl font-serif italic text-white mt-4">Chelsea's Hidden Gem.</h1>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-light">
              Located in Manhattan's historic industrial corridor, Death Ave Wines provides an atmospheric backdrop for discovering your next favorite bottle. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-white/10">
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-burgundy">The Address</h4>
                <p className="text-white text-lg font-light">{FALLBACK_SETTINGS.address}</p>
                <p className="text-gray-500 text-sm">Between 28th & 29th Street</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-burgundy">Get in Touch</h4>
                <p className="text-white text-lg font-light">{FALLBACK_SETTINGS.phone}</p>
                <p className="text-gray-500 text-sm">hello@deathavewines.com</p>
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-white/10">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-burgundy">Trading Hours</h4>
              <div className="grid grid-cols-2 gap-y-2 max-w-xs text-sm">
                {Object.entries(FALLBACK_SETTINGS.hours).map(([day, hrs]) => (
                  <React.Fragment key={day}>
                    <span className="text-gray-400">{day}</span>
                    <span className="text-white text-right font-bold">{hrs}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[600px] bg-[#1a1a1a] shadow-2xl group overflow-hidden">
            <div className="absolute inset-0 bg-neutral-900 opacity-60 flex items-center justify-center z-10">
               <div className="text-center">
                 <svg className="w-16 h-16 text-burgundy mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                 </svg>
                 <span className="uppercase tracking-widest text-xs font-bold text-white">Google Maps Integration</span>
               </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1541167760496-1628856ab752?q=80&w=1000" 
              alt="Shop Interior" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-[3s]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}