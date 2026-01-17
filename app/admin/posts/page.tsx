'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/db';
import { Post } from '@/lib/types';

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    db.posts.getAll().then(setPosts);
  }, []);

  return (
    <div className="space-y-12">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl serif text-white italic">Journal</h1>
          <p className="text-gray-500 uppercase tracking-widest text-[10px] mt-2">Editorial Management</p>
        </div>
        <button className="px-10 py-4 border border-white/10 text-white text-[10px] uppercase tracking-[0.2em] font-black hover:bg-white hover:text-black transition-all">
          Draft New Essay
        </button>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-[#111] border border-white/5 p-8 flex justify-between items-center hover:border-burgundy/30 transition-all">
            <div className="flex items-center space-x-10">
              <div className="w-40 h-24 bg-neutral-900 border border-white/5 overflow-hidden">
                <img src={post.image_url} alt="" className="w-full h-full object-cover grayscale opacity-40" />
              </div>
              <div>
                <h3 className="text-2xl serif text-white italic mb-2">{post.title}</h3>
                <div className="flex items-center space-x-4 text-[10px] uppercase tracking-widest text-gray-600 font-black">
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  <span className="w-1 h-1 bg-burgundy rounded-full"></span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-8">
              <button className="text-[10px] uppercase tracking-widest font-black text-gray-500 hover:text-white">Edit</button>
              <button className="text-[10px] uppercase tracking-widest font-black text-burgundy hover:text-red-600">Archive</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
