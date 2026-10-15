import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { trackCTAClick } from '../utils/gtm';

export default function HeroSection({ openModal }) {
  const handleHeroRefClick = () => {
    trackCTAClick('Hero Explore Range', 'Hero Section');
    document.getElementById('product-range').scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleHeroCtaClick = () => {
    trackCTAClick('Hero Consultation Request', 'Hero Section');
    openModal('Book your FREE Design Consultation', 'Hero Primary Button');
  };

  return (
    <section className="relative w-full h-[calc(100vh-60px)] min-h-[580px] sm:min-h-[650px] flex flex-col justify-center bg-slate-100 overflow-hidden">
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src="https://curtains.saleskarta.com/assets/curtains.png" 
          alt="Luxury Curtains Direct Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <span className="inline-block py-1 px-3 sm:py-1.5 sm:px-4 rounded-full bg-brand-gold/20 text-brand-gold font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-4 border border-brand-gold/40">
            Melbourne's Premium Window Stylists
          </span>
          <h1 className="text-[2.5rem] leading-[1.1] sm:text-6xl lg:text-[4.5rem] font-bold mb-4 sm:mb-6">
            We don't just cover windows. <br className="hidden sm:block" />
            <span className="text-brand-coral"> We style homes.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-200 mb-6 leading-relaxed font-light">
            Skip the readymade frustration. Experience bespoke, perfectly tailored Curtains and Blinds manufactured right here in Melbourne.
          </p>
          
          <ul className="space-y-2 sm:space-y-4 mb-8">
            <li className="flex items-center gap-3 text-base sm:text-lg font-medium">
              <CheckCircle className="text-brand-coral w-5 h-5 flex-shrink-0" /> Local Bayswater Factory
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg font-medium">
              <CheckCircle className="text-brand-coral w-5 h-5 flex-shrink-0" /> Perfect Custom Fit Guarantee
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg font-medium">
              <CheckCircle className="text-brand-coral w-5 h-5 flex-shrink-0" /> Free Expert Measure & Quote
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button 
              onClick={handleHeroCtaClick}
              className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 bg-brand-coral hover:bg-rose-600 text-white rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-brand-coral/20 transition-all flex items-center justify-center gap-2 group">
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleHeroRefClick}
              className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-base sm:text-lg transition-all text-center">
              Explore Our Range
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
