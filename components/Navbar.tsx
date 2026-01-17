'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide Navbar on admin routes
  if (pathname?.startsWith('/admin')) return null;

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Collection', path: '/wines' },
    { name: 'Services', path: '/services' },
    { name: 'Location', path: '/destinations' },
    { name: 'Journal', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black serif text-white tracking-tighter">
          DEATH AVE <span className="text-burgundy italic font-normal">WINES</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-[10px] uppercase tracking-[0.2em] font-black transition-colors hover:text-burgundy ${
                pathname === link.path ? 'text-burgundy' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/login" 
            className="px-5 py-2 border border-white/20 text-[9px] uppercase tracking-widest font-black hover:bg-white hover:text-black transition-all"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white flex flex-col space-y-2" 
          aria-label="Toggle Menu" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-8 h-px bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-8 h-px bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-px bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#0a0a0a] z-50 transition-transform duration-500 flex flex-col justify-center items-center space-y-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          className="absolute top-10 right-10 text-4xl text-white serif" 
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => setIsOpen(false)}
            className="text-5xl serif italic text-white hover:text-burgundy transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/login" 
          onClick={() => setIsOpen(false)}
          className="text-xl serif italic text-burgundy"
        >
          Admin Login
        </Link>
      </div>
    </nav>
  );
}