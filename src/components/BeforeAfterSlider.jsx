import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function BeforeAfterSlider({ openModal }) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-navy mb-6">See the Transformation</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">Slide to see how our custom tailored furnishings elevate a standard room into a premium home environment.</p>
        </div>
        
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12 relative cursor-ew-resize">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="/lp/curtainsblinds/assets/before.png" alt="Plain Window" />}
            itemTwo={<ReactCompareSliderImage src="/lp/curtainsblinds/assets/after.png" alt="Styled Window with Curtains" />}
            className="h-[350px] md:h-[600px] w-full"
          />
          <div className="absolute top-6 left-6 bg-slate-900/50 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold text-sm z-10 pointer-events-none uppercase tracking-wider">Before</div>
          <div className="absolute top-6 right-6 bg-brand-coral/90 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold text-sm z-10 pointer-events-none uppercase tracking-wider shadow-lg shadow-brand-coral/30">After</div>
        </div>
        
        <div className="text-center">
            <button 
              onClick={() => openModal('Transform My Home With Custom Curtains', 'Before-After Slider CTA')}
              className="px-8 py-5 bg-brand-coral hover:bg-rose-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-brand-coral/20 transition-transform hover:scale-105 border border-brand-coral"
            >
              Transform My Home
            </button>
        </div>
      </div>
    </section>
  );
}
