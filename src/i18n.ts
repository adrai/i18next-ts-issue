import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      key1: {
        key2: "",
      },
    },
  },
} as const;

i18next.use(initReactI18next).init({
  lng: "en",
  resources,
});
