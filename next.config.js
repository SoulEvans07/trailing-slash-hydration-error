const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath: "/hydration",
  i18n,
};

module.exports = nextConfig;
