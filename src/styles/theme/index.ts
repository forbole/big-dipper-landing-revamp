import { ThemeOptions, createTheme } from '@material-ui/core/styles';

/** Common themes that don't change across light and dark theme */
export const common: ThemeOptions = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
    limit: 1024,
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont,"Segoe UI","Roboto",
    "Oxygen","Ubuntu","Helvetica Neue", Arial, sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      whiteSpace: 'pre-wrap',
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  mixins: {
    gradientBackground: {
      background: 'conic-gradient(from 90deg at 60.16% 0%, #120704 0deg, #21080B 29.71deg, #20080B 32.94deg, #110605 112.44deg, #120704 360deg)',
    },
    headerGlow: {
      textShadow: '0px 0px 24px rgba(146, 85, 32, 0.8)',
      backdropFilter: 'blur(60px)',
      color: '#FEF3F2',
    },
    button: {
      padding: '0.75rem 1rem',
      borderRadius: '200px',
      background: 'linear-gradient(180deg, #FF6E7F 0%, #F76A65 100%)',
      color: '#FEE6E5',
      transition: '0.3s',
      '&:hover': {
        filter: 'brightness(0.8)',
      },
    },
    buttonSecondary: {
      background: 'transparent',
      padding: '0.75rem 1rem',
      transition: '0.3s',
      color: '#B79692',
      borderRadius: '200px',
      '&:hover': {
        filter: 'brightness(0.8)',
      },
    },
  },
  palette: {
    type: 'dark',
    secondary: {
      main: '#FF6E7F',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#EFEFEF',
      secondary: '#FEF3F2',
    },
    custom: {
      general: {
        white: '#ffffff',
      },
      fonts: {
        one: '#EFEFEF',
        two: '#FEF3F2',
        three: '#FFEAED',
        four: '#FEE6E5',
        five: '#FCCDCC',
        six: '#FF6E7F',
      },
    },
  },
};

export const darkTheme = createTheme(common);
