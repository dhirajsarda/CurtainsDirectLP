import React from 'react';

export default function LeadMagnetHook({ openModal }) {
  return (
    <section className="py-24 relative bg-slate-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="/lp/curtainsblinds/assets/lead-magnet.png" 
          alt="Curtain Styling Guide" 
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-brand-navy/80"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Inspiration for your space.
        </h2>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
          Request our Exclusive Portfolio of Past Work & Designer Styling Ideas. Packed with High-End Melbourne Projects.
        </p>
        <button 
          onClick={() => openModal('Request Exclusive Design Portfolio', 'Lead Magnet Hook CTA')}
          className="px-10 py-5 bg-white text-brand-navy rounded-xl font-bold text-lg shadow-2xl transition-transform hover:scale-105"
        >
          Get The Portfolio
        </button>
      </div>
    </section>
  );
}
