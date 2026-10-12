import { useLocation } from 'react-router';
import { locales, switchLocale, useLocale } from '../../shared/i18n';
import { cx } from '../../shared/utils';
import AppLink from '../AppLink/AppLink';

import './LangSelector.scss';

export const LANGUAGE_LABELS = { it: 'IT', en: 'EN', fr: 'FR', cn: '中文' };

/**
 * Language pills: keep the current page, swap the language.
 */
const LangSelector = ({ className }) => {
  const locale = useLocale();
  const { pathname } = useLocation();

  return (
    <ul className={cx('LangSelector', className)}>
      {locales.map((target) => (
        <li key={target}>
          <AppLink
            className={cx('LangSelector__link', target === locale && 'LangSelector__link_current')}
            to={switchLocale(pathname, locale, target)}
            aria-current={target === locale ? 'true' : undefined}
          >
            {LANGUAGE_LABELS[target]}
          </AppLink>
        </li>
      ))}
    </ul>
  );
};

export default LangSelector;
