import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import russianTranslation from './translations/russian.json';
import englishTranslation from './translations/english.json';

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ru: {translation:russianTranslation},
      en: {translation:englishTranslation},
    },
    lng: 'ru',
    fallbackLng: 'ru',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18next;
