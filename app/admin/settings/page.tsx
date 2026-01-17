'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/db';
import { AppSettings } from '@/lib/types';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<AppSettings | null>(null);

  useEffect(() => {
    db.settings.get().then(setSettings);
  }, []);

  if (!settings) return null;

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl serif text-white italic">Global Settings</h1>
        <p className="text-gray-500 uppercase tracking-widest text-[10px] mt-2">Brand Identity & Logistics</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <label className="text-[10px] uppercase tracking-widest text-burgundy font-black">Business Identity</label>
            <div className="space-y-8">
              <div className="border-b border-white/5 pb-2">
                <span className="text-[9px] uppercase text-gray-600 block mb-1">Brand Name</span>
                <input className="bg-transparent text-xl serif text-white w-full focus:outline-none" defaultValue={settings.brand_name} />
              </div>
              <div className="border-b border-white/5 pb-2">
                <span className="text-[9px] uppercase text-gray-600 block mb-1">Founder</span>
                <input className="bg-transparent text-xl serif text-white w-full focus:outline-none" defaultValue={settings.owner} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <label className="text-[10px] uppercase tracking-widest text-burgundy font-black">Location & Contact</label>
            <div className="space-y-8">
              <div className="border-b border-white/5 pb-2">
                <span className="text-[9px] uppercase text-gray-600 block mb-1">Street Address</span>
                <input className="bg-transparent text-xl serif text-white w-full focus:outline-none" defaultValue={settings.address} />
              </div>
              <div className="border-b border-white/5 pb-2">
                <span className="text-[9px] uppercase text-gray-600 block mb-1">Phone Line</span>
                <input className="bg-transparent text-xl serif text-white w-full focus:outline-none" defaultValue={settings.phone} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111] p-12 border border-white/5 space-y-10">
          <label className="text-[10px] uppercase tracking-widest text-burgundy font-black">Trading Hours</label>
          <div className="space-y-6">
            {Object.entries(settings.hours).map(([day, hrs]) => (
              <div key={day} className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-sm text-gray-400 font-light">{day}</span>
                <input className="bg-transparent text-right text-white font-bold focus:outline-none" defaultValue={hrs} />
              </div>
            ))}
          </div>
          <button className="w-full bg-burgundy py-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-900 transition-all mt-10 shadow-2xl">
            Update Storefront
          </button>
        </div>
      </div>
    </div>
  );
}
