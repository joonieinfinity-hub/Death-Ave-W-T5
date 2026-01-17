
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    if (email === 'admin@deathave.com' && password === 'admin') {
      onLogin();
      navigate('/admin');
    } else {
      alert('Use admin@deathave.com / admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6">
      <div className="w-full max-w-md bg-[#1a1a1a] p-12 border border-white/5 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl serif font-bold text-white mb-2 italic">Death Ave CMS</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Secure Administrator Access</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#121212] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-burgundy"
              placeholder="admin@deathave.com"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#121212] border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-burgundy"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-burgundy py-5 text-xs font-bold uppercase tracking-widest hover:bg-red-900 transition-colors mt-8">
            Authorize Entry
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <button onClick={() => navigate('/')} className="text-xs text-gray-600 hover:text-white transition-colors">
            Return to Storefront
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
