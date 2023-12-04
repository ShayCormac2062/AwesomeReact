import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LangLocalRepository from './LangLocalRepository';
import 'intl-pluralrules';
import ru from '../lang/ru.json';
import en from '../lang/en.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: LangLocalRepository.loadLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
