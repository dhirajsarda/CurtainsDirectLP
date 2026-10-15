import React from 'react';
import { ShieldCheck, Star, Factory } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="bg-brand-navy text-white text-sm py-3 px-4 w-full border-b border-white/10 hidden sm:block relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Factory className="w-4 h-4 text-brand-gold" />
          <span className="font-medium tracking-wide">Melbourne Made Factory</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-gold" />
          <span className="font-medium tracking-wide">Family Owned & Operated Since 2002</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-brand-gold" fill="currentColor" />
          <Star className="w-4 h-4 text-brand-gold" fill="currentColor" />
          <Star className="w-4 h-4 text-brand-gold" fill="currentColor" />
          <Star className="w-4 h-4 text-brand-gold" fill="currentColor" />
          <Star className="w-4 h-4 text-brand-gold" fill="currentColor" />
          <span className="font-medium tracking-wide ml-2">5-Star Verified Reviews</span>
        </div>
      </div>
    </div>
  );
}
