/* eslint-disable react/require-default-props */
import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@/src/styles/globals.css";
import "@/src/styles/slick-theme.css";
import "@/src/styles/slick.css";
import createEmotionCache from "@/src/utils/createEmotionCache";

import { darkTheme as theme } from "../styles/theme";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        name="viewport"
      />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default MyApp;
