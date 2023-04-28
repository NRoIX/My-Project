import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsEn from "./locales/en/translation.json";
import translationsAz from "./locales/az/translation.json";

export const LANGUAGES = ["en", "az"];

export const LOCAL_STORAGE_LANGUAGE_KEY = "lang";

const resources = {
  en: { translation: translationsEn },
  az: { translation: translationsAz },
};

i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) ?? undefined,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
