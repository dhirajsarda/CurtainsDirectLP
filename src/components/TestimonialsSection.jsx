import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "Jade Chai", suburb: "Melbourne", text: "Thanks to Curtains Direct we now have all new quality and aesthetic outdoor awnings, curtains, blinds and a perfectly matched bench seat cushion. Both Graham and Gerard are clearly experienced (I regretfully ignored some sound recommendations), easy to deal with, and the company was beyond obliging with our convoluted installation timeline. Won't hesitate to recommend." },
  { name: "Jane Victoria", suburb: "Melbourne", text: "If you need curtains, and you’re based in the city like me, these are the guys to go to !! So happy that I managed to get them for my curtains ! I dealt with Bernard who did measurements and to gave me the quote for my curtains ! Very honest and reliable tells you what you need and doesn’t try to sell you items that you do not need unlike other companies ! When it came to fitting the curtains, I dealt with Danny and Isaac, extremely friendly and efficient ! Couldn’t speak more highly about this company ! The prices are reasonable and they do an excellent job ! Keep up the good work !!" },
  { name: "Leanne", suburb: "Melbourne", text: "Highly recommend Curtain Direct and Blinds. Our home looks incredible with our new curtains. Bernard did our measure and quote. He was experience and extremely helpful. We got several quotes and found these guys to be very competitive with prices." }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
            <div className="text-white font-bold tracking-wider">Google</div>
            <div className="flex gap-0.5 text-brand-gold">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current opacity-50" />
            </div>
            <div className="text-brand-gold font-bold text-sm">4.5 Rating</div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Loved by Melbourne.</h2>
          <p className="text-lg text-slate-400 font-light">Don't just take our word for it.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 relative">
              <div className="flex gap-1 mb-6 text-brand-gold">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic outline-none focus:ring-1 focus:ring-brand-coral" contentEditable="true" suppressContentEditableWarning={true}>"{t.text}"</p>
              <div>
                <p className="text-white font-bold outline-none focus:ring-1 focus:ring-brand-coral" contentEditable={true} suppressContentEditableWarning={true}>{t.name}</p>
                <p className="text-slate-400 text-sm outline-none focus:ring-1 focus:ring-brand-coral" contentEditable={true} suppressContentEditableWarning={true}>{t.suburb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
