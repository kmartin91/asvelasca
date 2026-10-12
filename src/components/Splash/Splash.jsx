import { Suspense, use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { cmsImage, firstEntry } from '../../shared/cms';
import { isLocale, localePath } from '../../shared/i18n';
import logo from '../../shared/images/logo.png';
import { currentSeason, useDocumentTitle } from '../../shared/utils';
import AppLink from '../AppLink/AppLink';
import Marquee from '../Marquee/Marquee';
import Social from '../Social/Social';
import Torre from '../Torre/Torre';

import './Splash.scss';

const ENTRIES = [
  { locale: 'it', lang: 'it', name: 'Italiano', cta: 'Entra' },
  { locale: 'en', lang: 'en', name: 'English', cta: 'Enter' },
  { locale: 'fr', lang: 'fr', name: 'Français', cta: 'Entrer' },
  { locale: 'cn', lang: 'zh-Hans', name: '中文', cta: '进入' },
];

const TITLE = 'A.S. Velasca';

const Sponsors = ({ promise }) => {
  const images = firstEntry(use(promise)).Images ?? [];
  if (images.length === 0) return null;

  return (
    <ul className="Splash__sponsors">
      {images.map(({ path, meta: { title } = {} }) => {
        const logoImage = (
          <img src={cmsImage(path, 240)} alt={title ?? ''} width="120" height="60" loading="lazy" />
        );
        return (
          <li key={path}>
            {/^https?:\/\//.test(title) ? (
              <a href={title} target="_blank" rel="noopener noreferrer">
                {logoImage}
              </a>
            ) : (
              logoImage
            )}
          </li>
        );
      })}
    </ul>
  );
};

/**
 * Landing screen: pick a language and walk onto the pitch.
 */
const Splash = () => {
  const { sponsors } = useLoaderData();
  const { locale } = useParams();
  const season = currentSeason();
  useDocumentTitle('');

  return (
    <div className="Splash">
      <div className="Splash__stripes" aria-hidden="true" />
      <Torre className="Splash__torre" />

      <div className="Splash__top">
        <p className="Splash__chip">
          <span className="Splash__dot" aria-hidden="true" />
          Stagione {season.label}
        </p>
        <Social />
      </div>

      <main className="Splash__main">
        <img
          className="Splash__crest"
          src={logo}
          alt=""
          width="220"
          height="220"
          fetchPriority="high"
        />
        <h1 className="Splash__title" aria-label={TITLE}>
          {[...TITLE].map((char, index) => (
            <span key={index} className="Splash__char" style={{ '--i': index }} aria-hidden="true">
              {char === ' ' ? ' ' : char}
            </span>
          ))}
        </h1>
        <p className="Splash__tagline">La terza squadra di Milano</p>

        <nav className="Splash__langs" aria-label="Language / Lingua / Langue / 语言">
          {ENTRIES.map(({ locale: target, lang, name, cta }, index) => (
            <AppLink
              key={target}
              className="Splash__lang"
              to={localePath(target, 'home')}
              lang={lang}
              style={{ '--i': index }}
            >
              <span className="Splash__langName">{name}</span>
              <span className="Splash__langCta">
                {cta}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </span>
            </AppLink>
          ))}
        </nav>
      </main>

      <div className="Splash__bottom">
        <Suspense fallback={null}>
          <Sponsors promise={sponsors} />
        </Suspense>
        <AppLink
          className="Splash__disclaimer"
          to={localePath(isLocale(locale) ? locale : 'en', 'disclaimer')}
        >
          Disclaimer
        </AppLink>
      </div>

      <Marquee
        className="Splash__marquee"
        items={[
          'We are all but a football team',
          'La terza squadra di Milano',
          'Torre Velasca',
          'Est. 2015',
        ]}
      />
    </div>
  );
};

export default Splash;
