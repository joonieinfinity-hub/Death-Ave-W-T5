import { FALLBACK_SETTINGS } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 mb-24">
        <div className="space-y-16">
          <div>
            <span className="text-burgundy text-xs uppercase tracking-[0.5em] font-bold">Contact</span>
            <h1 className="text-6xl md:text-9xl serif italic text-white mt-6 leading-none">Say <br/> Hello.</h1>
          </div>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-lg font-light">
            Whether you have a question about a specific vintage or want to discuss a private event, we're here to help.
          </p>

          <div className="space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-700 mb-4">Direct Inquiries</h4>
              <p className="text-3xl serif text-white italic">{FALLBACK_SETTINGS.phone}</p>
              <p className="text-3xl serif text-white italic">hello@deathavewines.com</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-700 mb-4">Press & Partnerships</h4>
              <p className="text-3xl serif text-white italic">press@deathavewines.com</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111] p-12 md:p-20 border border-white/5 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
             </svg>
          </div>
          <form className="space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-600">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-burgundy" placeholder="Jean" />
              </div>
              <div className="space-y-4">
                <label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-600">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-burgundy" placeholder="Luc" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-600">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-burgundy" placeholder="jean@domain.com" />
            </div>
            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-600">Subject</label>
              <select className="w-full bg-[#111] border-b border-white/10 py-4 text-white focus:outline-none focus:border-burgundy appearance-none">
                <option>Wine Inquiry</option>
                <option>Event Booking</option>
                <option>General Feedback</option>
                <option>Wholesale</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-600">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-burgundy resize-none" placeholder="Tell us more..."></textarea>
            </div>
            <button className="w-full py-6 bg-burgundy text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-red-900 transition-all shadow-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}