import type { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material";

import basePath from "@/src/utils/basePath";

export const LIMIT = 1024;

const common: ThemeOptions = {
  breakpoints: {
    values: {
      lg: 1280, // default 1200
      md: 768, // default 900
      sm: 375, // default 600
      xl: 1920, // default 1536
      xs: 0, // default 0
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: false,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SF Pro Text';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${basePath("/fonts/sfProText.woff2")}) format('woff2');
        }
      `,
    },
  },

  mixins: {
    /* Blur 02 */
    blur02: {
      backdropFilter: "blur(16px)",
    },
    /* Blur 03 */
    blur03: {
      backdropFilter: "blur(24px)",
    },
    /* Blur 4 */
    blur04: {
      backdropFilter: "blur(64px)",
    },
    button: {
      "&:hover": {
        filter: "brightness(1.2)",
      },
      /* Primary Color/BD Red Gradient 02 */
      "backgroundColor": "#F6504B",
      "backgroundImage":
        "linear-gradient(103.18deg, #F6504B 20.77%, #DC001A 118.69%)",
      "borderRadius": "200px",
      /* Neutral Color/White */
      "color": "#FFFFFF",
      "padding": "0.75rem 1rem",
    },
    buttonSecondary: {
      "&:hover": {
        filter: "brightness(1.2)",
      },
      "backgroundColor": "transparent",
      "borderRadius": "200px",
      /* Neutral Color/White */
      "color": "#FFFFFF",
      "padding": "0.75rem 1rem",
    },
    headerGlow: {
      backdropFilter: "blur(60px)",
      color: "#FEF3F2",
      textShadow: "0px 0px 24px rgba(146, 85, 32, 0.8)",
    },
  },
  palette: {
    action: {
      activatedOpacity: 0.24,
      active: "#fff", // default
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      /* Neutral Color/White Transparent 04 */
      hover: "rgba(255, 255, 255, 0.5)", // default 'rgba(255, 255, 255, 0.08)'
      hoverOpacity: 0.5, // default 0.8
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
    },
    background: {
      default: "#1122B5", // default '#121212'
      /* Secondary Color/Royal Blue Transparent 03 */
      paper: "rgba(9,57,176,0.8)", // default '#121212'
    },
    common: {
      black: "#000", // default
      white: "#fff", // default
    },
    error: {
      contrastText: "#fff", // default
      dark: "#d32f2f", // default
      light: "#e57373", // default
      main: "#f44336", // default
    },
    grey: {
      100: "#f5f5f5", // default
      /* Neutral Color/Surface Grey */
      200: "#EFEFEF", // default '#eeeeee'
      /* Neutral Color/Light Grey 01 */
      300: "#DDDDDD", // default '#e0e0e0'
      /* Neutral Color/Light Grey 02 */
      400: "#bdbdbd", // default
      50: "#fafafa", // default
      /* Neutral Color/Icon Grey */
      500: "#afafaf", // default '#9e9e9e'
      600: "#757575", // default
      700: "#616161", // default
      800: "#424242", // default
      900: "#212121", // default
      A100: "#f5f5f5", // default
      /* Neutral Color/Surface Grey */
      A200: "#EFEFEF", // default '#eeeeee'
      A400: "#C2C2C2", // default '#bdbdbd'
      A700: "#616161", // default
    },
    info: {
      contrastText: "rgba(0, 0, 0, 0.87)", // default
      dark: "#0288d1", // default
      light: "#4fc3f7", // default
      main: "#29b6f6", // default
    },
    mode: "light", // dark or light
    primary: {
      contrastText: "rgba(0, 0, 0, 0.87)", // default
      /* Primary Color/Forbole Blue 01 */
      dark: "#202A43", // default '#42a5f5'
      light: "#e3f2fd", // default
      /* Secondary Color/Royal Blue */
      main: "#0939B0", // default '#90caf9'
    },
    secondary: {
      contrastText: "#FFFFFF", // default 'rgba(0, 0, 0, 0.87)'
      /* Secondary Color/Royal Blue 01 */
      dark: "#051D5B", // default
      light: "#f3e5f5", // default
      /* Primary Color/BD Salmon 01 */
      main: "#F6504B", // default '#ce93d8'
    },
    success: {
      contrastText: "rgba(0, 0, 0, 0.87)", // default
      dark: "#388e3c", // default
      light: "#81c784", // default
      /* Accent Color/Green 01 */
      main: "#1EC490", // default '#66bb6a'
    },
    text: {
      disabled: "#FEF3F2", // default 'rgba(255, 255, 255, 0.5)'
      primary: "#EFEFEF", // default '#fff'
      secondary: "#FEF3F2", // default 'rgba(255, 255, 255, 0.7)'
      // icon: '#FEF3F2', // default 'rgba(255, 255, 255, 0.12)'
    },
    warning: {
      contrastText: "rgba(0, 0, 0, 0.87)", // default
      dark: "#f57c00", // default
      light: "#ffb74d", // default
      main: "#ffa726", // default
    },
  },
  shadows: [
    "none",
    /* Drop Shadow 01 */
    "0px 1px 8px rgba(16, 24, 40, 0.06), 0px 1px 10px rgba(16, 24, 40, 0.05)",
    // default '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 0px 16px #695769",
    // '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  typography: {
    body1: {
      fontSize: "1rem",
      whiteSpace: "pre-wrap",
    },
    body2: {
      fontSize: "0.875rem",
    },
    button: {
      fontSize: "0.875rem",
      /* Secondary/Button/Button 2・14・Medium｜17 */
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 1.214,
    },
    caption: {
      fontSize: "0.75rem",
    },
    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
    h1: {
      fontSize: "3rem", // default '2.5rem'
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "0.875rem",
      /* Secondary/Subtitle/Subtitle 5・14・Semibold｜20 */
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: 1.429,
      /* or 143% */
      textTransform: "none",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },
};

export const darkTheme = createTheme(common);
