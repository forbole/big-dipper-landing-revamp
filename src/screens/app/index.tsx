import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { darkTheme } from '../../styles/theme';
import { useApp } from './hooks';

const App = ({ Component, pageProps }: AppProps) => {
  useApp();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
