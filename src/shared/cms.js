// Cockpit CMS (v1) access: collections + on-the-fly image resizing.

export const CMS_URL = (import.meta.env.SERVER_URL || '').replace(/\/+$/, '');
const API_PATH = (import.meta.env.API_URL || 'api').replace(/^\/+|\/+$/g, '');
const API_TOKEN = import.meta.env.API_TOKEN || '';

const cmsHost = CMS_URL ? new URL(CMS_URL).host : '';
const RESIZABLE = /\.(jpe?g|png)$/i;

export class HttpError extends Error {
  constructor(status, statusText) {
    super(statusText || `HTTP ${status}`);
    this.status = status;
  }
}

const apiUrl = (path) => `${CMS_URL}/${API_PATH}/${path}`;

// One promise per collection + language: pages revisited (or prefetched on hover) render instantly.
const cache = new Map();

export function fetchCollection(name, lang) {
  const key = `${name}|${lang || ''}`;
  if (!cache.has(key)) {
    const url = new URL(apiUrl(`collections/get/${encodeURIComponent(name)}`));
    if (lang) url.searchParams.set('lang', lang);

    const request = fetch(url, { headers: { 'Cockpit-Token': API_TOKEN } }).then((response) => {
      if (!response.ok) throw new HttpError(response.status, response.statusText);
      return response.json();
    });
    // Never keep a failure around: the next visit retries.
    request.catch(() => cache.delete(key));
    cache.set(key, request);
  }
  return cache.get(key);
}

export const firstEntry = (collection) => collection?.entries?.[0] ?? {};

// Path of an asset on the CMS ("/storage/…"), or null when it lives elsewhere.
export function toCmsPath(source) {
  if (!source) return null;
  if (/^https?:\/\//i.test(source)) {
    const url = new URL(source);
    return url.host === cmsHost ? url.pathname : null;
  }
  return source.startsWith('//') ? null : source;
}

// Plain URL of an asset (always https).
export function cmsAsset(source) {
  if (!source) return '';
  if (/^https?:\/\//i.test(source)) return source.replace(/^http:/i, 'https:');
  if (source.startsWith('//')) return `https:${source}`;
  return `${CMS_URL}/${source.replace(/^\/+/, '')}`;
}

// Resized copy through Cockpit's image API (never upscales with bestFit).
// Some originals weigh 6 MB: always go through this for photos.
export function cmsImage(source, width, quality = 72) {
  const path = toCmsPath(source);
  if (!path || !RESIZABLE.test(path)) return cmsAsset(source);

  const params = new URLSearchParams({
    token: API_TOKEN,
    src: path,
    w: width,
    h: width * 2,
    m: 'bestFit',
    q: quality,
    o: 1,
  });
  return `${apiUrl('cockpit/image')}?${params}`;
}

// Cockpit v1 cannot convert formats: a PNG photo stays a (heavy) PNG, so cap its size.
const MAX_PNG_WIDTH = 1280;

export function cmsSrcSet(source, widths, quality) {
  const path = toCmsPath(source);
  if (!path || !RESIZABLE.test(path)) return undefined;

  const isPng = /\.png$/i.test(path);
  const allowed = isPng ? widths.filter((width) => width <= MAX_PNG_WIDTH) : widths;
  return (allowed.length > 0 ? allowed : widths.slice(0, 1))
    .map((width) => `${cmsImage(source, width, quality)} ${width}w`)
    .join(', ');
}
