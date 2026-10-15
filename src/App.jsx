import React, { useState } from 'react';
import Header from './components/Header';
import TrustBar from './components/TrustBar';
import HeroSection from './components/HeroSection';
import FitSection from './components/FitSection';
import ProductGrid from './components/ProductGrid';
import ProcessSection from './components/ProcessSection';
import ExpertConsultationSection from './components/ExpertConsultationSection';
import WhyChooseUs from './components/WhyChooseUs';
import PastWorkGallery from './components/PastWorkGallery';
import TestimonialsSection from './components/TestimonialsSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import LeadMagnetHook from './components/LeadMagnetHook';
import StickyBottomNav from './components/StickyBottomNav';
import DesktopStickyCTA from './components/DesktopStickyCTA';
import DynamicModal from './components/DynamicModal';
import { initGTM } from './utils/gtm';
import { Phone } from 'lucide-react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalTracker, setModalTracker] = useState('');

  React.useEffect(() => {
    initGTM(import.meta.env.VITE_GTM_ID);
  }, []);

  const openModal = (displayTitle = 'Request Consultation', trackingSource = 'Unknown CTA') => {
    setModalTitle(displayTitle);
    setModalTracker(trackingSource);
    setModalOpen(true);
  };

  return (
    <div className="font-sans text-slate-800 antialiased overflow-hidden min-h-screen">
      <TrustBar />
      <Header openModal={openModal} />
      <HeroSection openModal={openModal} />
      <FitSection openModal={openModal} />
      
      <ProductGrid openModal={openModal} />
      <PastWorkGallery />
      
      <ExpertConsultationSection openModal={openModal} />
      
      <WhyChooseUs openModal={openModal} />
      <ProcessSection openModal={openModal} />
      <BeforeAfterSlider openModal={openModal} />
      
      <TestimonialsSection />
      
      <LeadMagnetHook openModal={openModal} />
      
      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-center border-t border-slate-900 pb-32 xl:pb-12">
        <div className="max-w-xl mx-auto px-6 font-medium text-slate-400 mb-6">
          <p className="mb-2 text-white">Our Showroom Locations are:</p>
          <p>Curtains Direct & Blinds,</p>
          <p>447 Mountain Highway Bayswater, VIC 3153</p>
        </div>
        <p className="text-slate-600 font-medium text-sm">© {new Date().getFullYear()} Curtains Direct. Melbourne, Australia.</p>
      </footer>

      {/* Mobile Floating Call Widget */}
      <a href="tel:+61397295414" className="nimbata_number lg:hidden fixed bottom-[120px] right-4 bg-brand-coral p-4 rounded-full text-white shadow-xl shadow-brand-coral/40 z-[85] hover:scale-105 transition-transform">
        <Phone className="w-6 h-6 fill-current"/>
      </a>

      {/* Persistent Interaction Hooks */}
      <StickyBottomNav openModal={openModal} />
      <DesktopStickyCTA openModal={openModal} />
      
      <DynamicModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        displayTitle={modalTitle} 
        trackingSource={modalTracker}
      />
    </div>
  );
}

export default App;
