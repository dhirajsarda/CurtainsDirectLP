export function getTrackingParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    gclid: params.get('gclid') || '',
    fbclid: params.get('fbclid') || '',
    msclkid: params.get('msclkid') || ''
  };
}
