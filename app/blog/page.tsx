
import Link from 'next/link';
import { db } from '@/lib/db';

export default async function BlogPage() {
  const posts = await db.posts.getAll();

  return (
    <div className="pt-40 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold">The Journal</span>
          <h1 className="text-6xl md:text-8xl serif italic text-white mt-4">Vines & Verbiage.</h1>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto italic font-light">Essays on terroir, culture, and the art of minimal intervention.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block space-y-10">
              <div className="aspect-video bg-[#151515] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-black">
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  <span className="w-1.5 h-1.5 bg-burgundy rounded-full"></span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-4xl md:text-6xl serif italic text-white group-hover:text-burgundy transition-colors leading-tight">{post.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">{post.excerpt}</p>
                <span className="inline-block text-[10px] uppercase tracking-widest font-black border-b border-burgundy pb-2">Read Essay</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
