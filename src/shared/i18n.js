/* @flow */
import LanguageEN from '../translations/en/wording.json';
import LanguageFR from '../translations/fr/wording.json';
import LanguageZH from '../translations/zh/wording.json';
import LanguageIT from '../translations/it/wording.json';

export const locales = ['en', 'fr', 'it', 'zh'];

// Dictionary of translations
const translations = {
  en: LanguageEN,
  fr: LanguageFR,
  zh: LanguageZH,
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
