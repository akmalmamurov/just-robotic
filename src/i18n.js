import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ruTranslations from "./locales/ru.json";
import uzTranslations from "./locales/uz.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ruTranslations },
    uz: { translation: uzTranslations },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
