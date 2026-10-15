import React from 'react';
import { Lock, Shield, MapPin, BadgeCheck } from 'lucide-react';

const reasons = [
  { icon: MapPin, title: 'Local Melbourne Factory', desc: 'Manufactured in Bayswater, cutting out middleman delays.' },
  { icon: Lock, title: '100% Secure & Honest', desc: 'No hidden fees. Transparent quoting from day one.' },
  { icon: BadgeCheck, title: 'Expert Installation', desc: 'Fitted by in-house professionals, not outsourced contractors.' },
  { icon: Shield, title: 'Quality Warranties', desc: 'We stand by our craftsmanship for the long haul.' }
];

export default function WhyChooseUs({ openModal }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-coral font-bold tracking-wider uppercase text-sm mb-2 block">Why Curtains Direct?</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-navy mb-6">The local advantage.</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light w-11/12">
              When you choose us, you aren't just buying blinds or curtains. You're investing in Melbourne craftsmanship, guaranteed quality, and a team that genuinely cares about your home.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {reasons.map((r, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                    <r.icon className="w-7 h-7 text-brand-coral" />
                  </div>
                  <h4 className="font-bold text-brand-navy text-xl">{r.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => openModal('Secure Your Installation Date', 'Why Choose Us CTA')}
              className="px-8 py-5 bg-brand-navy hover:bg-slate-800 text-white rounded-xl font-bold text-lg shadow-xl shadow-brand-navy/20 transition-all w-full sm:w-auto"
            >
              Secure Your Installation
            </button>
          </div>
          <div className="relative order-first lg:order-last mb-10 lg:mb-0">
             <div className="aspect-square bg-slate-100 rounded-full absolute -right-12 -top-12 w-full z-0 blur-3xl opacity-50"></div>
             <img src="https://curtains.saleskarta.com/assets/why-choose-us.png" 
                  alt="Friendly Professional Installer" 
                  className="rounded-3xl shadow-2xl relative z-10 border-8 border-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
