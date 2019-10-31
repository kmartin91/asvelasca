/* @flow */
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
