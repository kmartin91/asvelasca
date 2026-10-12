import { use } from 'react';
import { cmsImage, cmsSrcSet, firstEntry } from '../../shared/cms';
import { useTranslate } from '../../shared/i18n';
import { splitKitTitle } from '../../shared/utils';

import './Kits.scss';

/**
 * "Art × Football": every season's shirt, designed by an artist, newest first.
 */
const Kits = ({ promise }) => {
  const t = useTranslate();
  const kits = (firstEntry(use(promise)).slider ?? [])
    .map(({ path, meta }) => ({ path, ...splitKitTitle(meta?.title) }))
    .sort((a, b) => b.season.localeCompare(a.season));

  if (kits.length === 0) return null;

  return (
    <section className="Kits" aria-labelledby="kits-title">
      <header className="Kits__head">
        <h2 id="kits-title" className="Kits__title">
          Art <span>×</span> Football
        </h2>
        <p className="Kits__lead">{t('kitsLead')}</p>
      </header>

      <ul className="Kits__track" tabIndex={0} aria-label="Art × Football">
        {kits.map(({ path, artist, season }) => (
          <li key={path} className="Kits__card">
            <img
              className="Kits__image"
              src={cmsImage(path, 800)}
              srcSet={cmsSrcSet(path, [480, 800, 1200])}
              sizes="(min-width: 1024px) 30vw, 75vw"
              alt={`${artist} ${season}`}
              loading="lazy"
              decoding="async"
            />
            <div className="Kits__meta">
              <span className="Kits__season">{season}</span>
              <span className="Kits__artist">{artist}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Kits;
