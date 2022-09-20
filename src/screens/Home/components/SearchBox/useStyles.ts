import { alpha, css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      '&&.searchbox__focused': {
        [theme.breakpoints.down('md')]: {
          position: 'fixed !important',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: theme.spacing(8),
          display: 'flex',
          gap: theme.spacing(2),
          alignItems: 'center',
          padding: theme.spacing(0, 2, 0, 4),
          backgroundColor: 'rgba(29, 30, 34, 0.32)',
          ...theme.mixins.blur02,
          '& .searchbox__cancel-btn': {
            display: 'inline-flex',
          },
        },
      },
      '& .MuiAutocomplete-inputRoot': {
        backgroundColor: alpha(theme.palette.common.white, 0.2),
      },
      '&& .searchbox__cancel-btn': {
        color: theme.palette.secondary.contrastText,
        display: 'none',
      },
      '& .MuiAutocomplete-root': {
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: theme.spacing(36.375),
          minWidth: theme.spacing(36.375),
          height: theme.spacing(4.75),
        },
        '& .MuiInputBase-root': {
          border: `1px solid ${theme.palette.secondary.contrastText} !important`,
          borderRadius: theme.spacing(2),
          padding: `${theme.spacing(0.5, 2.25, 0.5, 2.25)} !important`,
        },
      },
    }),
    textField: css({
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    }),
    listItem: css({
      height: `${theme.spacing(7)} !important`,
      display: 'flex !important',
      flexFlow: 'row nowrap !important',
      justifyContent: 'space-between !important',
      alignItems: 'center !important',
      cursor: 'pointer !important',
      padding: `0 !important`,
      '& .MuiListItemIcon-root': {
        flex: `0 0 ${theme.spacing(7)} !important`,
        justifyContent: 'center !important',
        width: theme.spacing(7),
        '& .image': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: `${theme.spacing(3)} !important`,
          height: `${theme.spacing(3)} !important`,
          borderRadius: '100%',
          padding: 0,
          border: '0 none',
          margin: 0,
        },
      },
      '& .MuiListItemText-root': {
        flexFlow: 'row wrap !important',
        flex: `1 0 ${theme.spacing(3)} !important`,
        padding: '0 !important',
        /* Neutral Color/Light Grey 01 */
        color: theme.palette.grey[300],
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: theme.typography.body2.fontSize,
        lineHeight: 1.42,
      },
    }),
    paper: css({
      margin: theme.spacing(2, 0),
      /* Secondary Color/Royal Blue Transparent 04 */
      backgroundColor: alpha(theme.palette.primary.main, 0.9),
      /* Blur 03 */
      ...theme.mixins.blur03,
      /* Note: backdrop-filter has minimal browser support */
      borderRadius: theme.spacing(1.5),
    }),
    popper: css({
      zIndex: '2001 !important',
      '& .MuiAutocomplete-listbox': {
        maxHeight: `calc(50vh - ${theme.spacing(10)})`,
        [theme.breakpoints.up('md')]: {
          maxHeight: '70vh',
        },
      },
      [theme.breakpoints.down('md')]: {
        position: 'fixed !important',
        top: `${theme.spacing(8)} !important`,
        bottom: '0 !important',
        left: '0 !important',
        right: '0 !important',
        padding: `${theme.spacing(0, 4)} !important`,
        width: '100% !important',
        backgroundColor: 'rgba(29, 30, 34, 0.32) !important',
        ...theme.mixins.blur02,
        transform: 'none !important',
      },
    }),
  };
};

export default useStyles;
