
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { db } from '../db';
import { Wine, Post } from '../types';

const AdminOverview = () => (
  <div className="animate-fade-in space-y-12">
    <header className="flex justify-between items-end">
      <div>
        <h1 className="text-5xl serif text-white italic">At a Glance</h1>
        <p className="text-gray-500 uppercase tracking-widest text-[10px] mt-2">Inventory & Activity Monitoring</p>
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { label: 'Inventory Count', val: '152', trend: '+4 this week' },
        { label: 'Published Essays', val: '24', trend: '2 Drafts' },
        { label: 'Member Inquiries', val: '3', trend: 'Response req.' },
        { label: 'Avg. Bottle Price', val: '$48', trend: 'Organic focus' },
      ].map((stat, i) => (
        <div key={i} className="bg-[#151515] p-8 border border-white/5 hover:border-burgundy/30 transition-all">
          <h3 className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">{stat.label}</h3>
          <p className="text-4xl font-bold serif text-white mb-2 italic">{stat.val}</p>
          <span className="text-[10px] text-burgundy font-bold">{stat.trend}</span>
        </div>
      ))}
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-[#151515] p-8 border border-white/5">
        <h2 className="text-xl serif text-white mb-8 italic">System Logistics</h2>
        <div className="space-y-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
              <div className="flex items-center space-x-4">
                 <div className="w-2 h-2 rounded-full bg-burgundy"></div>
                 <span className="text-gray-300 text-sm font-light">Supabase sync complete for "Destinations"</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gray-600">34m ago</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-burgundy p-8 flex flex-col justify-between overflow-hidden relative">
         <div className="relative z-10">
           <h2 className="text-2xl serif text-white italic mb-4">Live Preview</h2>
           <p className="text-white/70 text-sm">Changes are synchronized instantly across the storefront environment.</p>
         </div>
         <Link to="/" className="relative z-10 text-[10px] uppercase tracking-widest font-black text-white border-b border-white/40 pb-1 self-start mt-12 hover:border-white">
            Launch Site Explorer
         </Link>
         <div className="absolute -bottom-10 -right-10 text-[120px] font-black opacity-10 serif italic">DAW</div>
      </div>
    </div>
  </div>
);

const ManageWines = () => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newWine, setNewWine] = useState<Partial<Wine>>({ 
    name: '', type: 'Red', price: 0, origin: '', vintage: '2023', is_featured: false, image_url: 'https://picsum.photos/seed/new-wine/600/800' 
  });

  useEffect(() => {
    db.wines.getAll().then(setWines);
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const wine = await db.wines.add({ ...newWine, id: Math.random().toString() } as Wine);
    setWines([wine, ...wines]);
    setIsAdding(false);
  };

  const handleDelete = async (id: string) => {
    await db.wines.delete(id);
    setWines(wines.filter(w => w.id !== id));
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl serif text-white italic">Cellar Inventory</h2>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">Manage physical bottle listings</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-widest font-black hover:bg-gray-200 transition-colors"
        >
          Catalog New Entry
        </button>
      </div>

      {isAdding && (
        <div className="bg-[#151515] p-10 border border-burgundy/30 animate-slide-up">
           <h3 className="text-xl serif text-white italic mb-8">Manual Entry</h3>
           <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input 
                className="bg-transparent border-b border-white/10 p-4 text-white focus:outline-none focus:border-burgundy" 
                placeholder="Wine Name" 
                onChange={e => setNewWine({...newWine, name: e.target.value})}
              />
              <select 
                className="bg-transparent border-b border-white/10 p-4 text-white focus:outline-none focus:border-burgundy"
                onChange={e => setNewWine({...newWine, type: e.target.value as any})}
              >
                <option value="Red">Red</option>
                <option value="White">White</option>
                <option value="Rosé">Rosé</option>
                <option value="Orange">Orange</option>
              </select>
              <input 
                className="bg-transparent border-b border-white/10 p-4 text-white focus:outline-none focus:border-burgundy" 
                placeholder="Price" 
                type="number"
                onChange={e => setNewWine({...newWine, price: Number(e.target.value)})}
              />
              <input 
                className="bg-transparent border-b border-white/10 p-4 text-white focus:outline-none focus:border-burgundy" 
                placeholder="Origin" 
                onChange={e => setNewWine({...newWine, origin: e.target.value})}
              />
              <div className="md:col-span-2 flex justify-end space-x-4">
                 <button type="button" onClick={() => setIsAdding(false)} className="text-[10px] uppercase tracking-widest text-gray-500">Cancel</button>
                 <button type="submit" className="bg-burgundy text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest">Store Data</button>
              </div>
           </form>
        </div>
      )}

      <div className="bg-[#151515] border border-white/5 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#0a0a0a] border-b border-white/10">
            <tr>
              <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">Asset</th>
              <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">Identity</th>
              <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">Profile</th>
              <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">Valuation</th>
              <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {wines.map(wine => (
              <tr key={wine.id} className="hover:bg-white/[0.01] transition-colors">
                <td className="px-8 py-6">
                  <div className="w-16 h-20 bg-neutral-800 overflow-hidden shadow-lg border border-white/5">
                    <img src={wine.image_url} className="w-full h-full object-cover grayscale" alt="" />
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="block text-white font-medium serif italic text-lg">{wine.name}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-600">Vintage {wine.vintage}</span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm">{wine.type}</span>
                    <span className="text-gray-600 text-xs">{wine.origin}</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-burgundy font-black text-lg">${wine.price}</td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end space-x-6">
                    <button className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-white">Edit</button>
                    <button 
                      onClick={() => handleDelete(wine.id)}
                      className="text-[10px] uppercase tracking-widest font-bold text-red-900 hover:text-red-600"
                    >
                      Purge
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex selection:bg-burgundy selection:text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-[#111] border-r border-white/5 flex flex-col fixed h-full z-50">
        <div className="p-10 border-b border-white/5">
          <Link to="/" className="text-2xl font-black serif text-white tracking-tighter leading-none block">
            DEATH AVE <br/> <span className="text-burgundy italic font-normal">WINES</span>
          </Link>
          <div className="mt-4 flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Systems Operational</span>
          </div>
        </div>

        <nav className="flex-grow p-6 space-y-2 mt-4">
          {[
            { label: 'Overview', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z', path: '/admin' },
            { label: 'Inventory', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', path: '/admin/wines' },
            { label: 'Essays', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', path: '/admin/posts' },
            { label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', path: '/admin/settings' },
          ].map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-4 px-6 py-4 text-[10px] uppercase tracking-[0.3em] font-black transition-all rounded-sm ${location.pathname === link.path ? 'bg-burgundy text-white' : 'text-gray-500 hover:bg-white/5 hover:text-white'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
              </svg>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-10 border-t border-white/5 space-y-4">
          <div className="flex items-center space-x-3 mb-6">
             <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center font-black text-white serif italic">MT</div>
             <div>
               <p className="text-[10px] text-white font-bold leading-none">M. Tzezailidis</p>
               <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">Super Admin</p>
             </div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full py-4 border border-white/10 text-[9px] uppercase tracking-widest text-gray-500 font-bold hover:bg-white hover:text-black transition-all"
          >
            Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-72 flex-grow p-16 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route index element={<AdminOverview />} />
            <Route path="wines" element={<ManageWines />} />
            <Route path="*" element={<div className="text-gray-500 italic text-xl py-20 text-center border border-dashed border-white/10">Module configuration pending...</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
