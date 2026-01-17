
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FALLBACK_POSTS } from '../constants';

const PostDetail: React.FC = () => {
  const { slug } = useParams();
  const post = FALLBACK_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl serif text-white mb-4 italic">Post not found.</h1>
          <Link to="/blog" className="text-burgundy underline uppercase tracking-widest text-xs">Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center space-x-4 text-[10px] uppercase tracking-widest text-gray-500 mb-8">
             <span>{new Date(post.created_at).toLocaleDateString()}</span>
             <span className="w-1 h-1 bg-burgundy rounded-full"></span>
             <span>By {post.author}</span>
          </div>
          <h1 className="text-5xl md:text-7xl serif italic text-white leading-tight mb-12">{post.title}</h1>
        </header>

        <div className="aspect-video bg-[#1a1a1a] mb-16 overflow-hidden">
          <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-8">
           <p className="text-xl font-light italic text-white/80 border-l-4 border-burgundy pl-8 py-4 bg-white/5">
             "{post.excerpt}"
           </p>
           <p>
             The landscape of the wine industry is shifting. For decades, the focus was on consistency—bottles that tasted exactly the same whether they were produced in 2010 or 2020. This was achieved through massive intervention: chemical pesticides, synthetic yeasts, and corrective additives like Mega Purple.
           </p>
           <p>
             At Death Ave Wines, we celebrate the vintage. We celebrate the flaws, the textures, and the stories that only living soil can produce. Low-intervention winemaking isn't just a trend; it's a return to the roots of the craft.
           </p>
           <p>
             When you drink a wine that has been respected from the vine to the glass, you aren't just consuming a beverage. You are participating in a conversation between a farmer and their land. It's conscious. It's cleaner. It's wine, truly realized.
           </p>
           <h3 className="text-2xl serif text-white italic pt-8">The Future is Organic.</h3>
           <p>
             As we look ahead, our mission remains focused: to bring the best eclectic and niche bottles to the industrial heart of Chelsea. We invite you to join us on this journey.
           </p>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
           <Link to="/blog" className="text-xs uppercase tracking-widest font-bold hover:text-burgundy transition-colors flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
              Back to Journal
           </Link>
           <div className="flex space-x-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-600">Share This:</span>
              <a href="#" className="text-xs hover:text-burgundy">TW</a>
              <a href="#" className="text-xs hover:text-burgundy">IG</a>
           </div>
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
