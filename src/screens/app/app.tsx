import type { AppProps } from 'next/app';
import { useApp } from './hooks';

const App = ({ Component, pageProps }: AppProps) => {
  useApp();
  return <Component {...pageProps} />;
};

export default App;
