
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      <aside className="w-72 bg-[#111] border-r border-white/5 flex flex-col fixed h-full z-50">
        <div className="p-10 border-b border-white/5">
          <Link href="/" className="text-2xl font-black serif text-white tracking-tighter leading-none block">
            DEATH AVE <br/> <span className="text-burgundy italic font-normal">WINES</span>
          </Link>
          <div className="mt-4 flex items-center space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Live Control</span>
          </div>
        </div>

        <nav className="flex-grow p-6 space-y-2 mt-4">
          {[
            { label: 'Overview', path: '/admin' },
            { label: 'Inventory', path: '/admin/wines' },
            { label: 'Journal', path: '/admin/posts' },
            { label: 'Settings', path: '/admin/settings' },
          ].map((link) => (
            <Link 
              key={link.path}
              href={link.path}
              className={`block px-6 py-4 text-[10px] uppercase tracking-[0.3em] font-black transition-all rounded-sm ${pathname === link.path ? 'bg-burgundy text-white' : 'text-gray-500 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-10 border-t border-white/5">
          <Link href="/" className="w-full block text-center py-4 border border-white/10 text-[9px] uppercase tracking-widest text-gray-500 font-bold hover:text-white transition-all">
            Exit Admin
          </Link>
        </div>
      </aside>

      <main className="ml-72 flex-grow p-16 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
