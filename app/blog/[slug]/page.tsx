import { db } from '@/lib/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = await db.posts.getBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-40 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center space-x-6 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-black mb-10">
             <span>{new Date(post.created_at).toLocaleDateString()}</span>
             <span className="w-1.5 h-1.5 bg-burgundy rounded-full"></span>
             <span>By {post.author}</span>
          </div>
          <h1 className="text-5xl md:text-8xl serif italic text-white leading-tight mb-16">{post.title}</h1>
        </header>

        <div className="aspect-video bg-[#151515] mb-20 overflow-hidden shadow-2xl">
          <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-gray-400 leading-relaxed space-y-10 font-light">
           <p className="text-2xl font-light italic text-white/90 border-l-2 border-burgundy pl-10 py-6 bg-white/[0.02]">
             "{post.excerpt}"
           </p>
           <p className="text-xl">
             The landscape of the wine industry is shifting. For decades, the focus was on consistency—bottles that tasted exactly the same whether they were produced in 2010 or 2020. This was achieved through massive intervention: chemical pesticides, synthetic yeasts, and corrective additives like Mega Purple.
           </p>
           <p className="text-xl">
             At Death Ave Wines, we celebrate the vintage. We celebrate the flaws, the textures, and the stories that only living soil can produce. Low-intervention winemaking isn't just a trend; it's a return to the roots of the craft.
           </p>
           <p className="text-xl">
             When you drink a wine that has been respected from the vine to the glass, you aren't just consuming a beverage. You are participating in a conversation between a farmer and their land. It's conscious. It's cleaner. It's wine, truly realized.
           </p>
           <h3 className="text-4xl serif text-white italic pt-10">The Future is Organic.</h3>
           <p className="text-xl">
             As we look ahead, our mission remains focused: to bring the best eclectic and niche bottles to the industrial heart of Chelsea. We invite you to join us on this journey.
           </p>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center">
           <Link href="/blog" className="text-[10px] uppercase tracking-[0.3em] font-black hover:text-burgundy transition-colors flex items-center">
              <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}/></svg>
              Back to Journal
           </Link>
           <div className="flex space-x-8">
              <span className="text-[9px] uppercase tracking-[0.4em] text-gray-700 font-black">Share</span>
              <a href="#" className="text-[10px] hover:text-burgundy font-black">TW</a>
              <a href="#" className="text-[10px] hover:text-burgundy font-black">IG</a>
           </div>
        </div>
      </div>
    </article>
  );
}