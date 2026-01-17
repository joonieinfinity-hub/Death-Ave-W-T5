
import React from 'react';
import { Link } from 'react-router-dom';
import { FALLBACK_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <span className="text-burgundy text-xs uppercase tracking-[0.3em] font-bold">The Journal</span>
          <h1 className="text-6xl md:text-8xl serif italic text-white mt-4">Vines & Verbiage.</h1>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto italic">Essays on terroir, culture, and the art of minimal intervention.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {FALLBACK_POSTS.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group block space-y-8">
              <div className="aspect-video bg-[#1a1a1a] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-[10px] uppercase tracking-widest text-gray-500">
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  <span className="w-1 h-1 bg-burgundy rounded-full"></span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-3xl md:text-5xl serif italic text-white group-hover:text-burgundy transition-colors">{post.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{post.excerpt}</p>
                <span className="inline-block text-xs uppercase tracking-widest font-bold border-b border-burgundy pb-1">Read Essay</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
