import { useParams } from 'react-router';
import en from '../translations/en/wording.json';
import fr from '../translations/fr/wording.json';
import it from '../translations/it/wording.json';
import cn from '../translations/cn/wording.json';

const translations = { en, fr, it, cn };

export const locales = ['it', 'en', 'fr', 'cn'];
export const DEFAULT_LOCALE = 'en';

export const isLocale = (value) => locales.includes(value);

export const translate = (locale, key) => translations[locale]?.[key] ?? translations.en[key];

export const getMenu = (locale) => translations[locale]?.menu ?? translations.en.menu;

// The locale lives in the URL (/it/squadra); unknown prefixes are rejected by the router.
export function useLocale() {
  const { locale } = useParams();
  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}

export function useTranslate() {
  const locale = useLocale();
  return (key) => translate(locale, key);
}

export const localePath = (locale, route = '') => `/${locale}${route ? `/${route}` : ''}`;

// Same page in another language: /fr/equipe -> /it/squadra, /en/shop/3 -> /fr/shop/3.
export function switchLocale(pathname, fromLocale, toLocale) {
  const segments = pathname.split('/').filter(Boolean);
  if (isLocale(segments[0])) segments.shift();
  if (segments.length === 0) return localePath(toLocale, 'home');

  const current = getMenu(fromLocale).find(({ route }) => route === segments[0]);
  const target = current && getMenu(toLocale).find(({ key }) => key === current.key);
  if (target) segments[0] = target.route;

  return localePath(toLocale, segments.join('/'));
}
