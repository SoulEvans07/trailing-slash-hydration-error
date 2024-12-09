/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en-GB",
    locales: ["hu-HU", "en-GB"],
    localeDetection: false,
  },
  appendNamespaceToMissingKey: true,
  defaultNS: "translations",
  localePath: "./public/locales",
};
