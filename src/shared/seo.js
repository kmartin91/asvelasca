// Search engines and link previews: canonical URLs, language alternates and the sitemap.
// Shared by the app (head tags per page) and the build (sitemap.xml, see vite.config.js).
import en from '../translations/en/wording.json';
import fr from '../translations/fr/wording.json';
import it from '../translations/it/wording.json';
import cn from '../translations/cn/wording.json';
import { PAGES } from './pages.js';

// The address shared everywhere (no www): every canonical URL points here.
export const SITE_URL = 'https://asvelasca.it';

const WORDING = { it, en, fr, cn };
export const LOCALES = Object.keys(WORDING);
export const HTML_LANG = { it: 'it', en: 'en', fr: 'fr', cn: 'zh-Hans' };

// Order confirmation: reachable after a purchase, never listed.
const UNLISTED = ['confirmation'];

export const absoluteUrl = (path) => SITE_URL + (path.replace(/\/+$/, '') || '/');

/** Every public route of a locale, as linked by the site (menu wording first, then page aliases). */
export function localeRoutes(locale) {
  const { menu } = WORDING[locale];
  const routes = ['home', ...menu.map(({ route }) => route)];
  PAGES.forEach(({ page, menuKey, paths }) => {
    if (UNLISTED.includes(page)) return;
    const fromMenu = menuKey && menu.find(({ key }) => key === menuKey);
    routes.push(fromMenu ? fromMenu.route : paths[0]);
  });
  return [...new Set(routes)];
}

export function sitemapXml(lastmod) {
  const urls = LOCALES.flatMap((locale) =>
    localeRoutes(locale).map((route) => absoluteUrl(`/${locale}/${route}`)),
  );
  const entries = [absoluteUrl('/'), ...urls]
    .map((loc) => `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

function setHeadTag(tagName, key, attributes) {
  let element = document.head.querySelector(`${tagName}[${key}="${attributes[key]}"]`);
  if (!element) {
    element = document.createElement(tagName);
    document.head.append(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

/**
 * Head tags the static index.html cannot know: page language, description, canonical URL and the
 * same page in the other languages. `alternates` maps each locale to its path (null on "/").
 */
export function updateHead({ locale, pathname, alternates }) {
  const url = absoluteUrl(pathname);
  document.documentElement.lang = HTML_LANG[locale];
  setHeadTag('link', 'rel', { rel: 'canonical', href: url });
  setHeadTag('meta', 'property', { property: 'og:url', content: url });
  setHeadTag('meta', 'name', { name: 'description', content: WORDING[locale].metaDescription });

  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((link) => link.remove());
  if (!alternates) return;
  Object.entries({ ...alternates, 'x-default': alternates.en }).forEach(([target, path]) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = HTML_LANG[target] ?? target;
    link.href = absoluteUrl(path);
    document.head.append(link);
  });
}

/** Keeps a page out of search results while it is shown (the 404 answers with HTTP 200). */
export function setNoIndex(isActive) {
  const selector = 'meta[name="robots"]';
  document.head.querySelector(selector)?.remove();
  if (isActive) setHeadTag('meta', 'name', { name: 'robots', content: 'noindex' });
}
