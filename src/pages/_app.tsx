import '@src/styles/globals.css';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@src/utils/create-emotion-cache';
import App from '@src/screens/app';

const clientSideEmotionCache = createEmotionCache();

type Props = AppProps & { emotionCache: EmotionCache };

const MyApp = ({ emotionCache = clientSideEmotionCache, ...rest }: Props) => {
  return (
    <CacheProvider value={emotionCache}>
      <App {...rest} />
    </CacheProvider>
  );
};

export default MyApp;
