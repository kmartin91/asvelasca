import { Suspense, use } from 'react';
import { useLoaderData, useLocation, useMatches } from 'react-router';
import { firstEntry } from '../../shared/cms';
import { getMenu, localePath, useLocale, useTranslate } from '../../shared/i18n';
import { PAGES } from '../../shared/pages';
import { pad, useDocumentTitle } from '../../shared/utils';
import AppLink from '../AppLink/AppLink';
import Arrow from '../Arrow/Arrow';
import PageHero, { PageHeroImage } from '../PageHero/PageHero';
import RichContent from '../RichContent/RichContent';
import Skeleton from '../Skeleton/Skeleton';

import './Edito.scss';

const EditoContent = ({ promise }) => {
  const { content } = firstEntry(use(promise));
  return <RichContent html={content} />;
};

/**
 * Editorial page (project, team, press…): content written in the CMS.
 */
const Edito = () => {
  const { content } = useLoaderData();
  const { page } = useMatches().at(-1).handle;
  const { pathname } = useLocation();
  const locale = useLocale();
  const t = useTranslate();

  const menu = getMenu(locale);
  const { menuKey, title } = PAGES.find((entry) => entry.page === page);
  const menuIndex = menu.findIndex(({ key }) => key === menuKey);
  const pageTitle = menu[menuIndex]?.label ?? title ?? pathname.split('/').pop();
  const next = menuIndex >= 0 ? menu[(menuIndex + 1) % menu.length] : null;

  useDocumentTitle(pageTitle);

  return (
    <article className="Edito" key={page}>
      <PageHero
        title={pageTitle}
        index={menuIndex >= 0 ? pad(menuIndex + 1) : undefined}
        media={
          <Suspense fallback={null}>
            <PageHeroImage promise={content} />
          </Suspense>
        }
      />

      <div className="Edito__sheet">
        <Suspense fallback={<Skeleton />}>
          <EditoContent promise={content} />
        </Suspense>
      </div>

      {next && (
        <AppLink className="Edito__next" to={localePath(locale, next.route)}>
          <span className="Edito__nextLabel">
            {t('next')} · {pad(menu.indexOf(next) + 1)}
          </span>
          <span className="Edito__nextTitle">{next.label}</span>
          <Arrow className="Edito__nextArrow" />
        </AppLink>
      )}
    </article>
  );
};

export default Edito;
