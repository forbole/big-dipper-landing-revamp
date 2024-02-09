/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires */
const nextTranslate = require("next-translate-plugin");

const nextConfig = nextTranslate({
  basePath: process.env.BASE_PATH ?? "",
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    deviceSizes: [375, 768, 1280, 1920],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/, // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      use: ["@svgr/webpack"],
    });
    return config;
  },
});

module.exports = nextConfig;
