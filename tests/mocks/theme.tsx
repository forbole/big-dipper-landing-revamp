/* eslint-disable */
import { ReactNode } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { darkTheme } from "@src/styles/theme";

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: { children: ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MockTheme;
