import React, { useState, useEffect } from 'react';
import { CalendarCheck, FileText } from 'lucide-react';

export default function StickyBottomNav({ openModal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[90] bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-3 pb-8 sm:pb-3 flex gap-3 lg:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <button 
        onClick={() => openModal('Submit Your Details', 'Mobile Sticky Nav: Consult')}
        className="flex-1 py-4 bg-white border-2 border-brand-navy text-brand-navy rounded-xl font-bold flex items-center justify-center gap-2 text-sm"
      >
        <CalendarCheck className="w-5 h-5 mb-0.5" /> Consult
      </button>
      <button 
        onClick={() => openModal('Get a Free Quote', 'Mobile Sticky Nav: Quote')}
        className="flex-1 py-4 bg-brand-coral text-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-lg shadow-brand-coral/30"
      >
        <FileText className="w-5 h-5 mb-0.5" /> Quote
      </button>
    </div>
  );
}
