import { useEffect, useRef } from 'react';
import { getMenu, localePath, useLocale, useTranslate } from '../../shared/i18n';
import { pad } from '../../shared/utils';
import AppLink from '../AppLink/AppLink';
import LangSelector from '../LangSelector/LangSelector';
import Social from '../Social/Social';
import Torre from '../Torre/Torre';

import './Menu.scss';

/**
 * Full-screen menu. A native <dialog>: focus trap, Escape and inert page come for free.
 */
const Menu = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);
  const locale = useLocale();
  const t = useTranslate();
  const menu = getMenu(locale);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const close = () => dialogRef.current.close();

  return (
    <dialog
      ref={dialogRef}
      id="site-menu"
      className="Menu"
      aria-label={t('menuOpen')}
      onClose={onClose}
    >
      <div className="Menu__inner">
        <button type="button" className="Menu__close" onClick={close}>
          <span>{t('menuClose')}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        <nav className="Menu__nav" aria-label="Menu">
          <ol className="Menu__list">
            {menu.map(({ key, route, label }, index) => (
              <li key={key} className="Menu__item" style={{ '--i': index }}>
                <AppLink to={localePath(locale, route)} className="Menu__link" onClick={close}>
                  <span className="Menu__index">{pad(index + 1)}</span>
                  <span className="Menu__label">{label}</span>
                </AppLink>
              </li>
            ))}
          </ol>
        </nav>

        <aside className="Menu__aside">
          <Torre className="Menu__torre" />
          <LangSelector className="Menu__langs" />
          <Social className="Menu__social" />
          <a className="Menu__mail" href="mailto:info@asvelasca.it">
            info@asvelasca.it
          </a>
        </aside>
      </div>
    </dialog>
  );
};

export default Menu;
