import React, { useState, useEffect, useRef } from 'react';
import { X, Loader2 } from 'lucide-react';
import { getTrackingParams } from '../utils/tracking';
import { trackFormStart, trackFormSubmit } from '../utils/gtm';

export default function DynamicModal({ isOpen, onClose, displayTitle, trackingSource }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', postcode: '', service: '' });
  const [trackingData, setTrackingData] = useState({});
  const [status, setStatus] = useState('idle'); 
  const [phoneError, setPhoneError] = useState('');
  const [postcodeError, setPostcodeError] = useState('');
  const startedTracking = useRef(false);

  useEffect(() => {
    if (isOpen) {
      setTrackingData(getTrackingParams());
      setStatus('idle');
      startedTracking.current = false;
      setFormData({ name: '', email: '', phone: '', postcode: '', service: '' });
      setPhoneError('');
      setPostcodeError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputStart = () => {
    if (!startedTracking.current) {
      trackFormStart(trackingSource);
      startedTracking.current = true;
    }
  };

  const validateAustralianPhone = (phone) => {
    const cleanPhone = phone.replace(/\s+/g, '');
    const ausPhoneRegex = /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$|^(?:13\d{4}|1300\d{6}|1800\d{6})$/;
    return ausPhoneRegex.test(cleanPhone);
  };

  const validateAustralianPostcode = (postcode) => {
    return /^\d{4}$/.test(postcode.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPhoneError('');
    setPostcodeError('');
    
    let hasError = false;

    if (!validateAustralianPhone(formData.phone)) {
      setPhoneError('Please enter a valid Australian phone number (e.g. 0400 000 000).');
      hasError = true;
    }

    if (!validateAustralianPostcode(formData.postcode)) {
      setPostcodeError('Please enter a valid 4-digit Australian postcode.');
      hasError = true;
    }

    if (hasError) return;

    setStatus('submitting');
    
    const payload = {
      ...formData,
      trackingSource: trackingSource, 
      formType: displayTitle,
      ...trackingData
    };

    try {
      const url = import.meta.env.VITE_GOOGLE_WEB_APP_URL || 'https://example.com/mock-url';
      
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' 
        },
        mode: 'no-cors' 
      });
      
      setStatus('success');
      trackFormSubmit(trackingSource, { source: trackingSource });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Received!</h3>
              <p className="text-slate-600">Our experts will be in touch with you shortly.</p>
              <button onClick={onClose} className="mt-6 w-full py-3 bg-brand-navy text-white text-lg rounded-xl font-medium hover:bg-slate-800 transition-colors">Close</button>
            </div>
          ) : (
             <>
              <h2 className="text-2xl font-bold text-brand-navy mb-2 leading-tight">
                {displayTitle || 'Share details for your FREE Consultation'}
              </h2>
              <p className="text-brand-coral font-bold flex items-center gap-2 mb-6 text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-coral"></span>
                </span>
                Priority intake: Spots are limited!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4" onFocusCapture={handleInputStart}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 outline-none transition-all" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 outline-none transition-all" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 outline-none transition-all" placeholder="0400 000 000" value={formData.phone} onChange={e => { setFormData({...formData, phone: e.target.value}); setPhoneError(''); }} />
                  {phoneError && <p className="text-red-500 text-xs mt-1 font-medium">{phoneError}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Postcode</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 outline-none transition-all" placeholder="3153" value={formData.postcode} onChange={e => { setFormData({...formData, postcode: e.target.value}); setPostcodeError(''); }} />
                    {postcodeError && <p className="text-red-500 text-xs mt-1 font-medium">{postcodeError}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Service</label>
                    <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/20 outline-none transition-all bg-white" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                      <option value="" disabled>Select...</option>
                      <option value="Curtain">Curtain</option>
                      <option value="Blinds">Blinds</option>
                      <option value="Shutter">Shutter</option>
                      <option value="Awnings">Awnings</option>
                      <option value="Motorization">Motorization</option>
                    </select>
                  </div>
                </div>
                
                <button disabled={status === 'submitting'} type="submit" className="w-full py-4 mt-2 bg-brand-coral hover:bg-rose-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-brand-coral/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70">
                  {status === 'submitting' ? <Loader2 className="animate-spin w-5 h-5"/> : 'Submit Request'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
