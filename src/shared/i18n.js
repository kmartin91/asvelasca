/* @flow */

import _get from 'lodash/get';
import LanguageEN from '../translations/en/wording.json';
import LanguageFR from '../translations/fr/wording.json';
import LanguageCN from '../translations/cn/wording.json';
import LanguageIT from '../translations/it/wording.json';

export const locales = ['en', 'fr', 'it', 'cn'];

// Dictionary of translations
const translations = {
  en: LanguageEN,
  fr: LanguageFR,
  cn: LanguageCN,
  it: LanguageIT,
};

export const translate = (key: string): any => {
  const locale = window.LOCALE_VELASCA;
  const localizationFile = translations[locale];
  if (localizationFile && Object.keys(localizationFile).length > 0) {
    return localizationFile[key] || undefined;
  }
  return undefined;
};

export const getKey = (path: string, nextLocale: string): any => {
  const locale = window.LOCALE_VELASCA;
  const currentLocalizationFile = translations[locale];
  const nextLocalizationFile = translations[nextLocale];

  if (currentLocalizationFile && nextLocalizationFile) {
    const { key: currentKey } =
      _get(currentLocalizationFile, 'menu', []).find(({ route }) => route === path) || [];

    if (!currentKey) return 'home';

    const { route: newRoute } =
      _get(nextLocalizationFile, 'menu', []).find(({ key }) => currentKey === key) || [];

    return newRoute || '';
  }
};
