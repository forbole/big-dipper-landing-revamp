/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires */
const nextTranslate = require("next-translate-plugin");

const nextConfig = nextTranslate({
  basePath: process.env.BASE_PATH ?? "",
  images: {
    deviceSizes: [375, 768, 1280, 1920],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      resourceQuery: /url/, // *.svg?url
      test: /\.svg$/i,
      type: "asset",
    });

    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

module.exports = nextConfig;
