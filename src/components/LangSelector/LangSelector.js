/* @flow */

import React from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import { locales, getKey } from '../../shared/i18n';

import './LangSelector.scss';

type PropTypes = {};

const setLocaleGlobale = (locale: string) => {
  window.LOCALE_VELASCA = locale;
};

const getRoute = (nextLocale: string) => {
  const lastPart = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  return getKey(lastPart, nextLocale);
};

/**
 * LangSelector
 */
const LangSelector = (props: PropTypes): Node => {
  return (
    <ul className="LangSelector">
      {locales &&
        locales
          .filter((locale) => locale !== window.LOCALE_VELASCA)
          .map((locale) => (
            <li className="LangSelector__item" key={locale}>
              <Link
                className="LangSelector__link"
                to={`/${locale}/${getRoute(locale)}`}
                onClick={(locale) => setLocaleGlobale(locale)}
              >
                {locale}
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default LangSelector;
