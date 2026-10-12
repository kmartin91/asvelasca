// Shared between the app (HTML sanitizer) and vite.config.js (Content-Security-Policy),
// so the embeds the CMS may use and the CSP that allows them never drift apart.

// Hosts allowed in <iframe src> coming from the CMS.
export const IFRAME_ORIGINS = [
  'https://tally.so',
  'https://www.youtube.com',
  'https://www.youtube-nocookie.com',
  'https://player.vimeo.com',
  'https://www.tuttocampo.it',
  'https://open.spotify.com',
];

// Only PayPal buy buttons may post a form out of the site.
export const FORM_ACTIONS = ['https://www.paypal.com/cgi-bin/webscr'];

export const buildCsp = ({ cmsOrigin }) =>
  [
    "default-src 'self'",
    "script-src 'self'",
    // CMS content ships inline style attributes.
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    `media-src 'self' ${cmsOrigin} https://www.asvelasca.it https://asvelasca.it`,
    "font-src 'self'",
    `connect-src 'self' ${cmsOrigin}`,
    `frame-src ${IFRAME_ORIGINS.join(' ')}`,
    `form-action 'self' ${[...new Set(FORM_ACTIONS.map((url) => new URL(url).origin))].join(' ')}`,
    "base-uri 'self'",
    "object-src 'none'",
    'upgrade-insecure-requests',
  ].join('; ');
