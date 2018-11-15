import i18next from 'i18next';

import Locales from './locales';

i18next.init({
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: 'en', // 'ru' | 'uk'
    resources: {
        en: {translation: Locales.en},
        ru: {translation: Locales.ru},
        uk: {translation: Locales.uk}
    },
});

// EXPORT BLOCK
const i18n = i18next;
export default i18n;
