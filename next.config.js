/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires */
const nextTranslate = require('next-translate');

const { i18n, ...nextConfig } = nextTranslate({
  basePath: process.env.BASE_PATH ?? '',
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

module.exports = nextConfig;
