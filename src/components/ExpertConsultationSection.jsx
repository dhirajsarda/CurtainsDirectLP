import React from 'react';

export default function ExpertConsultationSection({ openModal }) {
  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Not sure what's the right fit for your windows?
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl mb-10 leading-relaxed font-light max-w-3xl mx-auto">
          Skip the guesswork. Our design experts will help you balance light, privacy, aesthetic, and budget to find the perfect solution for your home.
        </p>
        <button 
          onClick={() => openModal('Schedule Free Consultation with an Expert', 'Expert Consultation CTA')}
          className="px-10 py-5 bg-brand-gold hover:bg-yellow-400 text-brand-navy rounded-xl font-bold text-lg shadow-xl shadow-brand-gold/20 transition-transform hover:scale-105"
        >
          Schedule Free Consultation
        </button>
      </div>
    </section>
  );
}
