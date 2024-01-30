import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PluralRules from "intl-pluralrules";

// Apply the polyfill

if (typeof window !== "undefined") {
  // browser code

  if (!window.Intl || !window.Intl.PluralRules) {
    window.Intl = { PluralRules };
  }
}

const resources = {
  en: {
    translation: {
      greeting: "Hello",
      welcome: "Welcome to my app",
      open_code: "Open up the code for this screen:",
      change_text:
        "Change any of the text, save the file, and your app will automatically update.",
      tap_here:
        "Tap here if your app doesn't automatically update after making changes",
    },
  },
  fr: {
    translation: {
      open_code: "Ouvrez le code de cet écran:",
      change_text:
        "Modifiez le texte, enregistrez le fichier et votre application sera automatiquement mise à jour.",
      tap_here:
        "Appuyez ici si votre application ne se met pas automatiquement à jour après avoir apporté des modifications",
    },
  },
};
// Add more languages as needed

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "fr",
    keySeparator: false, // disable key separator for nested translations
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
