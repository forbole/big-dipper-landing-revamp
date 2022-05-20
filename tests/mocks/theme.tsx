/* eslint-disable */
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import {
  StylesProvider, StylesOptions,
} from '@material-ui/styles/';

import { darkTheme } from '@src/styles/theme';

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: {children: React.ReactNode}) => {
  const generateClassName: StylesOptions['generateClassName'] = (
    rule,
    sheet,
  ): string => `${sheet!.options.classNamePrefix}-${rule.key}`;

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={darkTheme}>
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default MockTheme;
