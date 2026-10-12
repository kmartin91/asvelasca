import { getMenu, localePath, useLocale, useTranslate } from '../../shared/i18n';
import logo from '../../shared/images/logo.png';
import AppLink from '../AppLink/AppLink';
import Social from '../Social/Social';
import Torre from '../Torre/Torre';

import './Footer.scss';

const SUPPORTERS_ROUTE = { it: 'tifosi', fr: 'supporteurs' };

/**
 * Footer: call to the stands, sitemap, contacts and the giant wordmark.
 */
const Footer = () => {
  const locale = useLocale();
  const t = useTranslate();
  const menu = getMenu(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="Footer">
      <AppLink
        className="Footer__cta"
        to={localePath(locale, SUPPORTERS_ROUTE[locale] ?? 'supporters')}
      >
        <span className="Footer__ctaText">{t('footerJoin')}</span>
        <svg className="Footer__ctaArrow" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 19L19 5M8 5h11v11" />
        </svg>
      </AppLink>

      <div className="Footer__grid">
        <div className="Footer__club">
          <img src={logo} alt="A.S. Velasca" width="88" height="88" loading="lazy" />
          <p>
            We are all but
            <br />a football team.
          </p>
        </div>

        <nav className="Footer__nav" aria-label="Footer">
          <ul>
            {menu.map(({ key, route, label }) => (
              <li key={key}>
                <AppLink to={localePath(locale, route)}>{label}</AppLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="Footer__contact">
          <p className="Footer__label">{t('followUs')}</p>
          <Social />
          <a className="Footer__mail" href="mailto:info@asvelasca.it">
            info@asvelasca.it
          </a>
          <p className="Footer__city">Milano, Italia</p>
        </div>

        <Torre className="Footer__torre" isPlaying={false} />
      </div>

      <p className="Footer__wordmark" aria-hidden="true">
        Velasca
      </p>

      <div className="Footer__bottom">
        <span>© 2015–{year} A.S.D. Velasca</span>
        <AppLink to={localePath(locale, 'disclaimer')}>Disclaimer</AppLink>
        <span>
          {t('siteBy')}{' '}
          <a href="https://kevinmartin.dev" target="_blank" rel="noopener noreferrer">
            Kevin Martin
          </a>
          {' · '}
          <a href="https://kma.studio" target="_blank" rel="noopener noreferrer">
            kma.studio
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
