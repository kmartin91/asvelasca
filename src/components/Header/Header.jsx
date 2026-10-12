import { useState } from 'react';
import { getMenu, localePath, useLocale, useTranslate } from '../../shared/i18n';
import logo from '../../shared/images/logo.png';
import AppLink from '../AppLink/AppLink';
import LangSelector from '../LangSelector/LangSelector';
import Menu from '../Menu/Menu';

import './Header.scss';

/**
 * Header: crest, primary navigation, languages, shop and the full-screen menu.
 */
const Header = () => {
  const locale = useLocale();
  const t = useTranslate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = getMenu(locale);
  const primary = menu.filter(({ isPrimary, key }) => isPrimary && key !== 'shop');
  const shop = menu.find(({ key }) => key === 'shop');

  return (
    <header className="Header">
      <AppLink to={localePath(locale, 'home')} className="Header__brand" aria-label="A.S. Velasca">
        <img className="Header__crest" src={logo} alt="" width="52" height="52" />
        <span className="Header__wordmark" aria-hidden="true">
          <strong>A.S. Velasca</strong>
          <span>Milano · MMXV</span>
        </span>
      </AppLink>

      <nav className="Header__nav" aria-label="Main">
        <ul className="Header__list">
          {primary.map(({ key, route, label }) => (
            <li key={key}>
              <AppLink to={localePath(locale, route)} className="Header__link">
                <span className="Header__linkMask">
                  <span className="Header__linkText" data-text={label}>
                    {label}
                  </span>
                </span>
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="Header__actions">
        <LangSelector className="Header__langs" />
        {shop && (
          <AppLink to={localePath(locale, shop.route)} className="Button Button_red Header__shop">
            {shop.label}
          </AppLink>
        )}
        <button
          type="button"
          className="Header__burger"
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="Header__burgerLabel">{t('menuOpen')}</span>
          <span className="Header__burgerIcon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
