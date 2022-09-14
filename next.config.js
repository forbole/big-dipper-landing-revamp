/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires */
const nextTranslate = require('next-translate');

const { i18n, ...nextConfig } = nextTranslate({
  basePath: process.env.BASE_PATH ?? '',
  poweredByHeader: false,
  reactStrictMode: true,
  deviceSizes: [375, 768, 1280, 1920],
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
