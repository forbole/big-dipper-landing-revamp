/* eslint-disable no-underscore-dangle */
import createEmotionServer from '@emotion/server/create-instance';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { defaultLocale } from '@/i18n';
import { darkTheme as theme } from '@/src/styles/theme';
import basePath from '@/src/utils/basePath';
import createEmotionCache from '../utils/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__.query;
    const { emotionStyleTags } = this.props as unknown as {
      emotionStyleTags: JSX.Element[];
    };
    return (
      <Html
        lang={(Array.isArray(locale) ? locale[0] : locale) || defaultLocale}
      >
        <Head>
          <link
            rel="preload"
            href={basePath('/fonts/sfProText.woff2')}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href={basePath('/favicon.ico')} />
          <meta name="emotion-insertion-point" content="" />
          {emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          const propsWithCache = {
            emotionCache: cache,
            ...props,
          } as unknown as typeof props;
          return <App {...propsWithCache} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
