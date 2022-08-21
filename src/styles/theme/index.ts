import { createTheme, ThemeOptions } from '@mui/material/styles';

const breakpoints = {
  values: {
    xs: 0,
    sm: 375,
    md: 768,
    lg: 1280,
    xl: 1920,
  },
  limit: 1024,
};

const theme = createTheme({
  breakpoints,
});

export const common: ThemeOptions = {
  breakpoints,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SFPro';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url("/fonts/SF-Pro-Text-Regular.woff2") format('woff2');
        }
      `,
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  typography: {
    fontFamily: 'SFPro, Arial, sans-serif',
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
    subtitle2: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  },

  palette: {
    mode: 'dark',
    secondary: {
      main: '#F6504B',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#EFEFEF',
      secondary: '#FEF3F2',
    },
    background: {
      mobileMenu: '#334198',
      activeMenuItem: 'linear-gradient(103.18deg, #F6504B 20.77%, #DC001A 118.69%)',
      desktopMenu: '#3c52af none',
    },
  },
  mixins: {
    gradientBackground: {
      backgroundImage:
        'radial-gradient(300vw 100vh at 50% 50vh, rgba(212,112,151,0), #30177d), url(/images/background/back.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 0',
      [theme.breakpoints.up('md')]: {
        backgroundImage:
          'radial-gradient(512px 512px at 50% 300px, rgba(212,112,151,0), #30177d), url(/images/background/back.png)',
      },
    },
    headerGlow: {
      textShadow: '0px 0px 24px rgba(146, 85, 32, 0.8)',
      backdropFilter: 'blur(60px)',
      color: '#FEF3F2',
    },
    button: {
      padding: '0.75rem 1rem',
      borderRadius: '200px',
      background: 'linear-gradient(103.18deg, #F6504B 20.77%, #DC001A 118.69%)',
      color: '#FFFFFF',
      transition: '0.3s',
      '&:hover': {
        filter: 'brightness(0.8)',
      },
    },
    buttonSecondary: {
      background: 'transparent',
      padding: '0.75rem 1rem',
      transition: '0.3s',
      color: '#FFFFFF',
      borderRadius: '200px',
      '&:hover': {
        filter: 'brightness(0.8)',
      },
    },
  },
};

export const darkTheme = createTheme(common);
