/* eslint-disable */
import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { darkTheme } from '~src/styles/theme';

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default MockTheme;
