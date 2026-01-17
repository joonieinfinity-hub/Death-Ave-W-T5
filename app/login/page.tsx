
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@deathave.com' && password === 'admin') {
      router.push('/admin');
    } else {
      alert('Use admin@deathave.com / admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6">
      <div className="w-full max-w-md bg-[#111] p-16 border border-white/5 shadow-2xl text-center">
        <h1 className="text-4xl serif font-black text-white mb-4 italic">Access CMS</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-12">Authorized Personnel Only</p>

        <form onSubmit={handleSubmit} className="space-y-10 text-left">
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-burgundy"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-burgundy"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-burgundy py-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-900 transition-colors">
            Authorize
          </button>
        </form>
      </div>
    </div>
  );
}
