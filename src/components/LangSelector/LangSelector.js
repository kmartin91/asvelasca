/* @flow */

import React from 'react';
import { locales, getKey } from '../../shared/i18n';

import './LangSelector.scss';

type PropTypes = {};

const setLocaleGlobale = (locale: string) => {
  window.LOCALE_VELASCA = locale;
};

const getRoute = nextLocale => {
  const lastPart = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  return getKey(lastPart, nextLocale);
};

/**
 * LangSelector
 */
const LangSelector = (props: PropTypes) => {
  return (
    <ul className="LangSelector">
      {locales &&
        locales
          .filter(locale => locale !== window.LOCALE_VELASCA)
          .map(locale => (
            <li className="LangSelector__item" key={locale}>
              <a
                className="LangSelector__link"
                href={`/${locale}/${getRoute(locale)}`}
                onClick={locale => setLocaleGlobale(locale)}
              >
                {locale}
              </a>
            </li>
          ))}
    </ul>
  );
};

export default LangSelector;
