'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/db';
import { Wine } from '@/lib/types';

export default function AdminWinesPage() {
  const [wines, setWines] = useState<Wine[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.wines.getAll().then(data => {
      setWines(data);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Permanently remove this asset from inventory?')) {
      await db.wines.delete(id);
      setWines(prev => prev.filter(w => w.id !== id));
    }
  };

  return (
    <div className="space-y-12">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl serif text-white italic">Inventory</h1>
          <p className="text-gray-500 uppercase tracking-widest text-[10px] mt-2">Manage Storefront Assets</p>
        </div>
        <button 
          onClick={() => alert('CMS Write Access is simulated for this demo.')}
          className="px-10 py-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-black hover:bg-burgundy hover:text-white transition-all"
        >
          Catalog New Entry
        </button>
      </header>

      <div className="bg-[#111] border border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-black/40">
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-gray-600">Vintage</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-gray-600">Identity</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-gray-600">Type</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-gray-600 text-right">Valuation</th>
              <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-gray-600 text-right">Control</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {wines.map(wine => (
              <tr key={wine.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-8 py-6 font-mono text-gray-500 text-xs">{wine.vintage}</td>
                <td className="px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-16 bg-neutral-900 border border-white/5 flex-shrink-0 overflow-hidden">
                      <img src={wine.image_url} alt="" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <span className="block text-white font-bold serif italic text-lg">{wine.name}</span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-600">{wine.origin}</span>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-gray-400 text-sm uppercase tracking-widest">{wine.type}</td>
                <td className="px-8 py-6 text-right font-bold text-white">${wine.price}</td>
                <td className="px-8 py-6 text-right">
                  <button 
                    onClick={() => handleDelete(wine.id)}
                    className="text-[10px] uppercase tracking-widest font-black text-burgundy opacity-50 hover:opacity-100 transition-opacity"
                  >
                    Purge
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
