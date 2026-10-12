import { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router';
import { DEFAULT_LOCALE, isLocale, locales, switchLocale } from '../../shared/i18n';
import { updateHead } from '../../shared/seo';
import NotFound from '../Errors/NotFound';
import Layout from './Layout';

// Same page in every language. The splash has no page segment: /it, /en… (none for bare "/").
function alternatesOf(pathname, locale) {
  if (!locale) return null;
  const hasPage = pathname.split('/').filter(Boolean).length > 1;
  return Object.fromEntries(
    locales.map((target) => [
      target,
      hasPage ? switchLocale(pathname, locale, target) : `/${target}`,
    ]),
  );
}

/**
 * Validates the optional /:locale prefix (only it, en, fr, cn) and keeps the head in sync:
 * <html lang>, description, canonical URL and language alternates.
 */
const LocaleGate = () => {
  const { locale } = useParams();
  const { pathname } = useLocation();
  const isValid = !locale || isLocale(locale);

  useEffect(() => {
    const current = isValid && locale ? locale : DEFAULT_LOCALE;
    updateHead({
      locale: current,
      pathname,
      alternates: isValid ? alternatesOf(pathname, locale) : null,
    });
  }, [locale, isValid, pathname]);

  if (!isValid) {
    return (
      <Layout>
        <NotFound />
      </Layout>
    );
  }
  return <Outlet />;
};

export default LocaleGate;
