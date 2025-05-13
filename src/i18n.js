import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ruTranslations from "./locales/ru.json";
import uzTranslations from "./locales/uz.json";

const savedLng = localStorage.getItem("i18nextLng") || "ru";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ruTranslations },
    uz: { translation: uzTranslations },
  },
  lng: savedLng,
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;
