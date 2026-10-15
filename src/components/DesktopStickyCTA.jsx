import React from 'react';
import { trackCTAClick } from '../utils/gtm';

export default function DesktopStickyCTA({ openModal }) {
  const handleStickyClick = () => {
    trackCTAClick('Desktop Sticky - Free Consultation', 'Desktop Right Margin');
    openModal('Schedule Free Consultation', 'Desktop Right Sticky CTA');
  };

  return (
    <div className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 origin-bottom-right -rotate-90 translate-x-[42px] hover:translate-x-[42px] hover:scale-105 transition-all">
      <button 
        onClick={handleStickyClick}
        className="bg-brand-coral hover:bg-rose-600 text-white font-bold px-8 py-3 rounded-t-xl shadow-[0_-10px_20px_rgba(244,63,94,0.3)] tracking-wider uppercase text-sm border-b-0 border border-brand-coral"
      >
        Free Consultation
      </button>
    </div>
  );
}
