import React, { useState } from 'react';
import { trackCTAClick } from '../utils/gtm';

const productCategories = [
  {
    id: 'curtains',
    name: 'Custom Curtains',
    image: '/lp/curtainsblinds/assets/curtains.png',
    keywords: ['S-Fold Curtains', 'Wave Fold Curtains', 'Blockout Curtains', 'Sheer Curtains', 'Pinch Pleat Curtains'],
    desc: 'From elegant, light-filtering sheer drop curtains to heavy thermal blockouts designed for shift-workers and media rooms. Our Melbourne factory tailors perfect, floor-to-ceiling custom drapery.',
  },
  {
    id: 'blinds',
    name: 'Premium Blinds',
    image: '/lp/curtainsblinds/assets/blinds.png',
    keywords: ['Roller Blinds', 'Roman Blinds', 'Venetian Blinds', 'Double Roller Blinds', 'Zebra Blinds'],
    desc: 'Minimalist profiles with maximum control. We manufacture bespoke blind solutions including functional double rollers, elegant fabric romans, and modern venetians tailored to your exact frame.',
  },
  {
    id: 'motorisation',
    name: 'Smart Motorisation',
    image: '/lp/curtainsblinds/assets/motorisation.png',
    keywords: ['Motorised Blinds', 'Automated Curtains', 'Somfy Experts', 'Smart Home Integration', 'Wire-Free Motors'],
    desc: 'Bring your home into the future. With ultra-quiet, wire-free or hardwired smart motors, you can control your entire home\'s light footprint at the press of a single button or voice command.',
  }
];

export default function ProductGrid({ openModal }) {
  const [activeDesktopTab, setActiveDesktopTab] = useState(productCategories[0]);
  const [openMobileTabs, setOpenMobileTabs] = useState([productCategories[0].id]);

  const toggleMobileTab = (id) => {
    if (openMobileTabs.includes(id)) {
      setOpenMobileTabs(openMobileTabs.filter(t => t !== id));
    } else {
      setOpenMobileTabs([...openMobileTabs, id]);
    }
  };

  const handleQuoteClick = (productName) => {
    trackCTAClick(`Product Accordion CTA - ${productName}`, 'Explore Range');
    openModal(`Get a Quote for ${productName}`, `Product Range: ${productName}`);
  };

  return (
    <section id="product-range" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-navy mb-6">Explore Our Range</h2>
          <p className="text-lg text-slate-600 font-light">Discover our specialised suite of window styling options, from flowing soft fabrics to cutting-edge smart motorisations.</p>
        </div>
        
        {/* DESKTOP LAYOUT (Hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          <div className="col-span-4 flex flex-col gap-3">
            {productCategories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveDesktopTab(cat)}
                className={`text-left px-6 py-5 rounded-2xl transition-all border-2 font-bold text-lg ${activeDesktopTab.id === cat.id ? 'border-brand-coral bg-brand-coral/5 text-brand-navy' : 'border-transparent bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="col-span-8 flex flex-row gap-8 bg-slate-50 rounded-2xl p-6 border border-slate-100 transition-all">
             <div className="flex-1">
                <h3 className="text-3xl font-bold text-brand-navy mb-4">{activeDesktopTab.name}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">{activeDesktopTab.desc}</p>
                
                <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Features we manufacture:</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeDesktopTab.keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg font-medium shadow-sm">
                      {kw}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => handleQuoteClick(activeDesktopTab.name)}
                  className="px-8 py-4 bg-brand-coral hover:bg-rose-600 text-white rounded-xl font-bold transition-colors shadow-lg shadow-brand-coral/20 text-lg border border-brand-coral"
                >
                  Get Free Quote
                </button>
             </div>
             <div className="w-64 h-auto rounded-xl overflow-hidden shadow-md flex-shrink-0">
               <img src={activeDesktopTab.image} alt={activeDesktopTab.name} className="w-full h-full object-cover" />
             </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (Accordion UX - Multi Expandable to prevent scroll jumping) */}
        <div className="lg:hidden flex flex-col gap-4">
          {productCategories.map(cat => {
            const isOpen = openMobileTabs.includes(cat.id);
            return (
              <div key={cat.id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => toggleMobileTab(cat.id)}
                  className={`w-full flex items-center justify-between text-left px-6 py-5 font-bold text-lg transition-colors ${isOpen ? 'bg-brand-coral/5 text-brand-navy border-b border-brand-coral/10' : 'text-slate-600'}`}
                >
                  {cat.name}
                  <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-brand-coral' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                {isOpen && (
                  <div className="p-5 bg-slate-50 animate-in slide-in-from-top-2 duration-300 border-t border-brand-coral/5">
                     <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm" />
                     <p className="text-slate-600 mb-6 leading-relaxed bg-white p-4 rounded-xl border border-slate-100 text-[15px]">{cat.desc}</p>
                     
                     <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Features we manufacture:</h4>
                     <div className="flex flex-wrap gap-2 mb-8">
                       {cat.keywords.map((kw, i) => (
                         <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-[13px] rounded-lg font-medium shadow-sm">
                           {kw}
                         </span>
                       ))}
                     </div>

                     <button 
                       onClick={() => handleQuoteClick(cat.name)}
                       className="w-full py-4 bg-brand-coral hover:bg-rose-600 text-white rounded-xl font-bold transition-colors shadow-lg shadow-brand-coral/20 text-lg border border-brand-coral"
                     >
                       Get Free Quote
                     </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
