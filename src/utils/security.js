// Anti-Tamper, Domain Lock & Remote Expiry Verification
const MASTER_DOMAINS = ['saleskarta.com', 'localhost', '127.0.0.1'];
const CLIENT_EXPIRY_TIMESTAMP = new Date('2026-10-26T23:59:59').getTime();
const REMOTE_LICENSE_URL = 'https://curtains.saleskarta.com/license.json';

function terminatePage() {
  if (typeof document === 'undefined') return;
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
}

export function verifyAuthorizedOrigin() {
  if (typeof window === 'undefined') return true;

  const currentHost = window.location.hostname.toLowerCase();

  // 1. Master domains (Saleskarta / Localhost) always have unlimited permanent access
  const isMaster = MASTER_DOMAINS.some(d => currentHost === d || currentHost.endsWith('.' + d));
  if (isMaster) return true;

  // 2. Validate client domain
  const isClient = currentHost === 'curtainsdirect.com.au' || currentHost.endsWith('.curtainsdirect.com.au');
  if (!isClient) {
    // Attempted to run on any third-party or unknown domain
    terminatePage();
    return false;
  }

  // 3. Hardcoded Anti-Copy Expiry (If someone copied all files to avoid your VPS)
  if (Date.now() > CLIENT_EXPIRY_TIMESTAMP) {
    terminatePage();
    return false;
  }

  // 4. Remote Live License Verification from your VPS
  // Allows you to revoke access immediately at any moment by editing license.json or stopping VPS
  try {
    fetch(`${REMOTE_LICENSE_URL}?_t=${Date.now()}`, { cache: 'no-store' })
      .then(res => {
        if (!res.ok) throw new Error('License revoked');
        return res.json();
      })
      .then(data => {
        const isWhitelisted = data.whitelistedDomains && data.whitelistedDomains.some(d => 
          currentHost === d || currentHost.endsWith('.' + d)
        );
        const isNotExpired = !data.clientExpiryDate || Date.now() <= new Date(data.clientExpiryDate).getTime();

        if (!data.active || !isWhitelisted || !isNotExpired) {
          terminatePage();
        }
      })
      .catch(() => {
        // If VPS is shut down or returns 404, destroy copied page on client site
        terminatePage();
      });
  } catch {
    terminatePage();
    return false;
  }

  return true;
}
