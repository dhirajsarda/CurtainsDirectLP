/**
 * Initialize GTM Script dynamically
 */
export const initGTM = (gtmId) => {
  if (!gtmId) return;
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
  
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
};

/**
 * Push structured events to Google Tag Manager Data Layer
 */
export const pushToDataLayer = (event, eventData = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...eventData
    });
  }
};

/**
 * Common GTM Actions
 */
export const trackCTAClick = (ctaName, section) => {
  pushToDataLayer('cta_click', {
    cta_name: ctaName,
    section: section
  });
};

export const trackFormStart = (formName) => {
  pushToDataLayer('form_start', {
    form_name: formName
  });
};

export const trackFormSubmit = (formName, leadData = {}) => {
  pushToDataLayer('form_submit', {
    form_name: formName,
    lead_source: leadData.source || '',
    revenue_value: 0
  });
};
