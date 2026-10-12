import { Suspense, use, useState } from 'react';
import { cmsImage, cmsSrcSet, firstEntry } from '../../shared/cms';
import { getMenu, localePath, useLocale, useTranslate } from '../../shared/i18n';
import { currentSeason, cx, pad, splitKitTitle, usePrefersReducedMotion } from '../../shared/utils';
import AppLink from '../AppLink/AppLink';
import Arrow from '../Arrow/Arrow';

import './Hero.scss';

/**
 * Slides: one artist kit per season. The CSS progress bar drives the autoplay
 * (its animationend moves to the next slide), so hovering the card pauses everything.
 */
const HeroSlider = ({ promise }) => {
  const slides = firstEntry(use(promise)).slider ?? [];
  const t = useTranslate();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [{ current, previous }, setPosition] = useState({ current: 0, previous: null });
  // Only slides about to be shown are rendered: no download of 9 hero images upfront.
  const [loaded, setLoaded] = useState(() => new Set([0, 1]));

  if (slides.length === 0) return null;

  const goTo = (index) => {
    const next = (index + slides.length) % slides.length;
    if (next === current) return;
    setPosition({ current: next, previous: current });
    setLoaded((set) => new Set(set).add(next).add((next + 1) % slides.length));
  };

  const { artist, season } = splitKitTitle(slides[current].meta?.title);

  return (
    <>
      <div className="Hero__slides">
        {slides.map(
          ({ path, meta }, index) =>
            loaded.has(index) && (
              <figure
                key={path}
                className={cx(
                  'Hero__slide',
                  index === current && 'Hero__slide_current',
                  index === previous && 'Hero__slide_previous',
                )}
              >
                <img
                  src={cmsImage(path, 1600)}
                  srcSet={cmsSrcSet(path, [768, 1280, 1920, 2560])}
                  sizes="100vw"
                  alt={index === current ? (meta?.title ?? '') : ''}
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding="async"
                />
              </figure>
            ),
        )}
      </div>

      <div className="Hero__card">
        <p className="Hero__counter">
          <strong>{pad(current + 1)}</strong> / {pad(slides.length)}
        </p>
        <p className="Hero__kitLabel">{t('kitBy')}</p>
        <p className="Hero__artist" key={current}>
          {artist}
        </p>
        {season && <p className="Hero__season">{season}</p>}

        <div className="Hero__controls">
          <button
            type="button"
            className="Hero__arrow"
            aria-label={t('prev')}
            onClick={() => goTo(current - 1)}
          >
            <Arrow className="Hero__arrowIcon_prev" />
          </button>
          <button
            type="button"
            className="Hero__arrow"
            aria-label={t('next')}
            onClick={() => goTo(current + 1)}
          >
            <Arrow />
          </button>
        </div>

        <ol className="Hero__bars">
          {slides.map(({ path }, index) => (
            <li key={path}>
              <button
                type="button"
                className={cx(
                  'Hero__bar',
                  index < current && 'Hero__bar_done',
                  index === current && 'Hero__bar_current',
                )}
                aria-label={`${index + 1} / ${slides.length}`}
                aria-current={index === current ? 'true' : undefined}
                onClick={() => goTo(index)}
              >
                <span
                  className="Hero__barFill"
                  onAnimationEnd={
                    index === current && !prefersReducedMotion ? () => goTo(current + 1) : undefined
                  }
                />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

/**
 * Home hero: full-bleed kits slider and the club's motto.
 */
const Hero = ({ slidesPromise }) => {
  const locale = useLocale();
  const t = useTranslate();
  const menu = getMenu(locale);
  const routeOf = (key) => menu.find((item) => item.key === key)?.route ?? key;
  const season = currentSeason();

  return (
    <section className="Hero" aria-labelledby="hero-title">
      <Suspense fallback={null}>
        <HeroSlider promise={slidesPromise} />
      </Suspense>
      <div className="Hero__shade" aria-hidden="true" />

      <div className="Hero__content">
        <p className="Hero__eyebrow">
          <span className="Hero__live" aria-hidden="true" />
          {t('season')} {season.label} · Milano
        </p>
        <h1 id="hero-title" className="Hero__title">
          <span className="Hero__line">
            <span>La terza</span>
          </span>
          <span className="Hero__line Hero__line_outline">
            <span>squadra</span>
          </span>
          <span className="Hero__line">
            <span>di Milano</span>
          </span>
        </h1>
        <p className="Hero__lead">We are all but a football team.</p>
        <div className="Hero__ctas">
          <AppLink className="Button" to={localePath(locale, routeOf('project'))}>
            {t('heroCta')}
            <Arrow className="Button__arrow" />
          </AppLink>
          <AppLink className="Button Button_red" to={localePath(locale, routeOf('shop'))}>
            {t('shopCta')}
            <Arrow className="Button__arrow" />
          </AppLink>
        </div>
      </div>

      <p className="Hero__vertical" aria-hidden="true">
        Est. 2015 · Torre Velasca · Milano
      </p>
    </section>
  );
};

export default Hero;
