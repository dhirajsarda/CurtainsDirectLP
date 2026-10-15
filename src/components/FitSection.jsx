import React from 'react';

export default function FitSection({ openModal }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-brand-coral -rotate-2 rounded-3xl scale-105 opacity-20"></div>
            <img 
              src="https://curtains.saleskarta.com/assets/curtains.png" 
              onError={(e) => { e.target.src = 'https://curtains.saleskarta.com/assets/curtains.png'; }}
              alt="Perfect Custom Fit Curtains" 
              className="relative z-10 w-full h-[550px] object-cover rounded-3xl shadow-2xl border-4 border-white" 
            />
            <div className="absolute -bottom-6 lg:-left-12 left-4 bg-brand-navy p-6 rounded-2xl shadow-2xl z-20 w-48">
              <p className="text-brand-gold font-bold text-5xl mb-1 mt-2">100%</p>
              <p className="text-white text-sm font-bold uppercase tracking-wider mb-1">Custom Made</p>
              <div className="w-10 h-1 bg-brand-coral mt-4"></div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-navy leading-tight mb-6">
              Readymade setups <span className="relative inline-block"><span className="relative z-10 text-slate-500">rarely fit.</span><span className="absolute w-full h-[3px] bg-red-400 top-1/2 left-0 -rotate-2 border-slate-50 rounded-full"></span></span> <br/>
              We make them belong.
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Every window is unique. Relying on store-bought, off-the-shelf solutions often leads to awkward gaps, dragging fabrics, and a compromised aesthetic. You deserve better.
            </p>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-light">
              Our expert tailors design and craft window furnishings specifically for your exact measurements, ensuring a flawless drape, perfect light control, and an undeniable touch of luxury that completely transforms your room.
            </p>
            
            <button 
              onClick={() => openModal('Book Your Expert Measure', 'Fit Section CTA')}
              className="px-10 py-5 bg-brand-navy hover:bg-slate-800 text-white rounded-xl font-bold text-lg shadow-xl shadow-brand-navy/20 transition-all border border-brand-navy"
            >
              Design Your Custom Fit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
