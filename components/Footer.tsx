
import React from 'react';
import { Link } from 'react-router-dom';
import { FALLBACK_SETTINGS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl serif font-bold text-white italic">Death Ave Wines</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Curated low-intervention wines and niche eclectic selections in the heart of NYC. Conscious drinking for a cleaner culture.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-burgundy transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-burgundy transition-colors">Twitter</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/wines" className="hover:text-white transition-colors">Our Collection</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Weekly Tastings</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Origin Story</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Wine Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">Hours & Info</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            {Object.entries(FALLBACK_SETTINGS.hours).map(([day, hours]) => (
              <li key={day} className="flex justify-between max-w-[200px]">
                <span>{day}</span>
                <span className="text-white">{hours}</span>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <span className="block">{FALLBACK_SETTINGS.address}</span>
              <span className="block text-white mt-2 font-bold">{FALLBACK_SETTINGS.phone}</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400">Never miss a tasting or new arrival.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-[#1a1a1a] border border-white/10 px-4 py-3 text-sm w-full focus:outline-none focus:border-burgundy"
            />
            <button className="bg-burgundy text-white px-6 py-3 uppercase tracking-tighter text-xs font-bold hover:bg-red-900 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:row justify-between text-[10px] uppercase tracking-widest text-gray-600">
        <p>&copy; {new Date().getFullYear()} Death Ave Wines. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
