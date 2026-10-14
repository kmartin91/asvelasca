import LocaleGate from './components/Layout/LocaleGate';
import Layout from './components/Layout/Layout';
import NotFound from './components/Errors/NotFound';
import RouteError from './components/Errors/RouteError';
import { lazyRoute, loaders } from './shared/loaders';
import { PAGES } from './shared/pages';

const editoRoutes = PAGES.flatMap(({ page, paths }) =>
  paths.map((path) => ({
    path,
    handle: { page },
    loader: loaders.edito(page),
    lazy: lazyRoute('edito'),
  })),
);

export const routes = [
  {
    // Locale prefix is optional: /squadra and /it/squadra both work (as on the old site).
    path: '/:locale?',
    Component: LocaleGate,
    ErrorBoundary: RouteError,
    HydrateFallback: () => null,
    children: [
      { index: true, lazy: lazyRoute('splash') },
      {
        Component: Layout,
        ErrorBoundary: RouteError,
        children: [
          { path: 'home', loader: loaders.home, lazy: lazyRoute('home') },
          { path: 'shop', loader: loaders.shop, lazy: lazyRoute('shop') },
          { path: 'shop/:id', loader: loaders.shop, lazy: lazyRoute('shop') },
          ...editoRoutes,
          { path: '*', Component: NotFound },
        ],
      },
    ],
  },
];
