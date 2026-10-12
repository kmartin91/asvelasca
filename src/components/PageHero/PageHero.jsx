import { use } from 'react';
import { cmsImage, cmsSrcSet, firstEntry } from '../../shared/cms';
import { cx } from '../../shared/utils';

import './PageHero.scss';

export const PageHeroImage = ({ promise }) => {
  const { background } = firstEntry(use(promise));
  if (!background?.path) return null;

  return (
    <img
      className="PageHero__image"
      src={cmsImage(background.path, 1600)}
      srcSet={cmsSrcSet(background.path, [768, 1280, 1920, 2560])}
      sizes="100vw"
      alt=""
      fetchPriority="high"
      decoding="async"
    />
  );
};

/**
 * Page header: CMS background, page number and a huge title squeezing into place.
 */
const PageHero = ({ title, index, media, isCompact }) => (
  <header className={cx('PageHero', isCompact && 'PageHero_compact')}>
    <div className="PageHero__media">{media}</div>
    <div className="PageHero__content">
      <p className="PageHero__eyebrow">
        {index && <span className="PageHero__index">{index}</span>}
        A.S. Velasca
      </p>
      <h1 className="PageHero__title">{title}</h1>
    </div>
  </header>
);

export default PageHero;
