import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '@src/styles/theme';
import { useApp } from './hooks';

const App = ({ Component, pageProps }: AppProps) => {
  useApp();
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
