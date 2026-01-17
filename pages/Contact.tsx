
import React from 'react';
import { FALLBACK_SETTINGS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
        <div className="space-y-12">
          <div>
            <span className="text-burgundy text-xs uppercase tracking-[0.3em] font-bold">Contact</span>
            <h1 className="text-6xl md:text-8xl serif italic text-white mt-4">Say Hello.</h1>
          </div>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            Whether you have a question about a specific vintage or want to discuss a private event, we're here to help.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Direct Inquiries</h4>
              <p className="text-2xl serif text-white">{FALLBACK_SETTINGS.phone}</p>
              <p className="text-2xl serif text-white">hello@deathavewines.com</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Press & Partnerships</h4>
              <p className="text-2xl serif text-white">press@deathavewines.com</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-10 md:p-16 border border-white/5 shadow-2xl">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-burgundy" placeholder="Jean" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-burgundy" placeholder="Luc" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-burgundy" placeholder="jean@domain.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Subject</label>
              <select className="w-full bg-[#1a1a1a] border-b border-white/10 py-3 text-white focus:outline-none focus:border-burgundy">
                <option>Wine Inquiry</option>
                <option>Event Booking</option>
                <option>General Feedback</option>
                <option>Wholesale</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-burgundy resize-none" placeholder="Tell us more..."></textarea>
            </div>
            <button className="w-full py-5 bg-burgundy text-white text-xs uppercase tracking-widest font-bold hover:bg-red-900 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
