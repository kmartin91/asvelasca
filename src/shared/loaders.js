import { fetchCollection } from './cms';
import { DEFAULT_LOCALE, isLocale } from './i18n';
import { pageForPath } from './pages';

const langOf = (params) => (isLocale(params.locale) ? params.locale : DEFAULT_LOCALE);

// Route code is split per page and only downloaded when needed.
const importers = {
  splash: () => import('../components/Splash/Splash'),
  home: () => import('../components/Main/Main'),
  shop: () => import('../components/Shop/Shop'),
  edito: () => import('../components/Edito/Edito'),
};

export const lazyRoute = (name) => async () => ({ Component: (await importers[name]()).default });

// Loaders hand promises to the pages (not awaited): the page shell shows at once, data streams in.
export const loaders = {
  home: ({ params }) => ({ home: fetchCollection('home', langOf(params)) }),
  shop: ({ params }) => ({ shop: fetchCollection('shop', langOf(params)) }),
  edito:
    (page) =>
    ({ params }) => ({ content: fetchCollection(page, langOf(params)) }),
};

const ignore = () => {};

// Warm code + data up when a link is hovered or focused: the click then feels instant.
export function prefetch(to, locale) {
  const [segment] = String(to).split('/').filter(Boolean).slice(1);
  const params = { locale };

  if (segment === 'home') {
    importers.home().catch(ignore);
    loaders.home({ params });
  } else if (segment === 'shop') {
    importers.shop().catch(ignore);
    loaders.shop({ params });
  } else {
    const entry = pageForPath(segment);
    if (!entry) return;
    importers.edito().catch(ignore);
    loaders.edito(entry.page)({ params });
  }
}
