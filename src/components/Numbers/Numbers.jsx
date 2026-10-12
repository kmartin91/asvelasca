import { Suspense, use } from 'react';
import { firstEntry } from '../../shared/cms';
import { useTranslate } from '../../shared/i18n';
import { FOUNDED, currentSeason, cx, useInView } from '../../shared/utils';
import Torre from '../Torre/Torre';

import './Numbers.scss';

// The digits count up in CSS (@property + counter()); screen readers get the plain number.
const Stat = ({ value, label, index }) => (
  <div className="Numbers__stat" style={{ '--target': value, '--i': index }}>
    <dt className="Numbers__label">{label}</dt>
    <dd className="Numbers__value">
      <span className="Numbers__count" aria-hidden="true" />
      <span className="Numbers__sr">{value}</span>
    </dd>
  </div>
);

const KitsStat = ({ promise, label }) => {
  const kits = firstEntry(use(promise)).slider?.length ?? 0;
  return <Stat value={kits} label={label} index={2} />;
};

/**
 * Club numbers as a scoreboard, next to the tower lighting up one floor per season.
 */
const Numbers = ({ kitsPromise }) => {
  const t = useTranslate();
  const season = currentSeason();
  const floor = Math.min(season.count, 26);
  const [ref, isInView] = useInView(0.25);

  return (
    <section
      ref={ref}
      className={cx('Numbers', isInView && 'Numbers_visible')}
      aria-labelledby="numbers-title"
    >
      <header className="Numbers__head">
        <p className="Numbers__eyebrow">A.S. Velasca · 2015 → {season.start + 1}</p>
        <h2 id="numbers-title" className="Numbers__title">
          {t('numbersTitle')}
        </h2>
      </header>

      <div className="Numbers__body">
        <dl className="Numbers__grid">
          <Stat value={FOUNDED} label={t('statFounded')} index={0} />
          <Stat value={season.count} label={t('statSeasons')} index={1} />
          <Suspense fallback={<Stat value={0} label={t('statKits')} index={2} />}>
            <KitsStat promise={kitsPromise} label={t('statKits')} />
          </Suspense>
          <Stat value={26} label={t('statFloors')} index={3} />
        </dl>

        <figure className="Numbers__tower">
          <Torre className="Numbers__torre" lit={floor} isPlaying={isInView} />
          <figcaption className="Numbers__caption">
            <strong>
              {t('floor')} {floor}
              <span>/26</span>
            </strong>
            {t('floorsLine')}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Numbers;
