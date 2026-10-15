import React from 'react';
import { PhoneCall, Ruler, FileText, Wrench } from 'lucide-react';

const steps = [
  { step: '01', icon: PhoneCall, title: 'Consultation', desc: 'Discuss your vision and style.' },
  { step: '02', icon: Ruler, title: 'Measure', desc: 'Precision sizing for a perfect fit.' },
  { step: '03', icon: FileText, title: 'Quote', desc: 'Transparent, competitive pricing.' },
  { step: '04', icon: Wrench, title: 'Installation', desc: 'Expert fitting by our local team.' },
];

export default function ProcessSection({ openModal }) {
  return (
    <section className="py-24 bg-brand-navy text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our 4-Step Process</h2>
          <p className="text-slate-300 text-lg font-light leading-relaxed">From zero to beautiful windows without lifting a finger.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-slate-700 border-dashed border-t-2 border-slate-600 z-0 opacity-50"></div>
          {steps.map((st, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center border-4 border-brand-navy shadow-xl mb-6 relative group-hover:-translate-y-2 transition-transform duration-300">
                 <st.icon className="w-10 h-10 text-brand-gold" />
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-coral text-white font-bold flex items-center justify-center text-sm border-2 border-brand-navy">
                   {st.step}
                 </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{st.title}</h3>
              <p className="text-slate-400 font-medium">{st.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <button 
              onClick={() => openModal('Secure Your Setup Consultation', 'Process Section CTA')}
              className="px-8 py-5 bg-brand-coral hover:bg-rose-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-brand-coral/20 transition-all border border-brand-coral"
            >
              Book Free Consultation Now
            </button>
        </div>
      </div>
    </section>
  );
}
