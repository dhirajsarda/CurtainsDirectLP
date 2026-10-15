import React from 'react';
import { Phone, Grid } from 'lucide-react';
import { trackCTAClick } from '../utils/gtm';

export default function Header({ openModal }) {
  const handleCallbackClick = () => {
    trackCTAClick('Header Request Callback', 'Header');
    openModal('Request a Callback', 'Header Callback Button');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://www.curtainsdirect.com.au/wp-content/uploads/2023/08/CDB-BCN-new-logo.jpg" alt="Curtains Direct Logo" className="h-[50px] w-auto" />
          <span className="font-sans font-bold text-2xl tracking-tight text-brand-navy hidden sm:block">
            Curtains <span className="font-light">Direct</span>
          </span>
        </div>
        
        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="tel:+61397295414" className="text-brand-navy font-bold hover:text-brand-coral transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4 fill-brand-coral text-brand-coral" /> <span className="nimbata_number">+61 3 9729 5414</span>
          </a>
          <button 
            onClick={handleCallbackClick}
            className="px-6 py-2.5 bg-brand-navy hover:bg-slate-800 text-white rounded-full font-bold text-sm tracking-wide shadow-md transition-all border border-brand-navy"
          >
            Request a Callback Now
          </button>
        </div>

        {/* Mobile Call Icon CTA */}
        <div className="sm:hidden flex items-center gap-4">
          <a
            href="tel:+61397295414"
            className="nimbata_number w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center shadow-lg"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button 
            onClick={handleCallbackClick}
            className="text-sm px-4 py-2 bg-brand-coral text-white rounded-full font-bold shadow-md"
          >
            Callback
          </button>
        </div>
      </div>
    </header>
  );
}
