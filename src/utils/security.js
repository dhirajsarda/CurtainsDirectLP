// Anti-tamper & Authorized Domain Verification
export function verifyAuthorizedOrigin() {
  if (typeof window === 'undefined') return true;

  const currentHost = window.location.hostname.toLowerCase();

  // Permitted domain whitelist
  const allowedHosts = [
    'curtainsdirect.com.au',
    'saleskarta.com',
    'localhost',
    '127.0.0.1'
  ];

  const isAuthorized = allowedHosts.some(allowed => 
    currentHost === allowed || currentHost.endsWith('.' + allowed)
  );

  if (!isAuthorized) {
    // If copied or run on an unauthorized domain or server, blank the page
    document.documentElement.innerHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head><title>404 Not Found</title></head>
        <body style="display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;font-family:sans-serif;color:#64748b;background:#f8fafc;">
          <div style="text-align:center;">
            <h1 style="font-size:3rem;margin:0 0 10px 0;color:#334155;">404</h1>
            <p style="font-size:1.1rem;margin:0;">The requested resource is unavailable.</p>
          </div>
        </body>
      </html>
    `;
    return false;
  }

  return true;
}
