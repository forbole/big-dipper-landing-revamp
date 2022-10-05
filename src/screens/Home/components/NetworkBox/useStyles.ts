import { alpha, css, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      minWidth: theme.spacing(15),
      minHeight: theme.spacing(10),
      borderRadius: theme.spacing(1.5),
      backgroundColor: alpha(theme.palette.common.white, 0.6),
      border: `2px solid ${theme.palette.text.primary}`,
      display: 'inline-flex',
      justifyContent: 'center',
      flexFlow: 'row wrap',
      alignItems: 'center',
      textAlign: 'center',
      '& .MuiLinearProgress-root': {
        width: '100%',
      },
      '& .MuiTypography-h3, & .MuiTypography-h6, & .MuiTypography-body1': {
        whiteSpace: 'nowrap',
      },
      '& .image': {
        minWidth: theme.spacing(6),
        minHeight: theme.spacing(6),
        maxWidth: theme.spacing(6),
        maxHeight: theme.spacing(6),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%',
        padding: 0,
        border: '0 none',
        margin: 0,
      },
      '& .networkbox__explore-btn': {
        ...theme.mixins.button,
        fontSize: theme.typography.body1.fontSize,
      },
      '& .networkbox__close-btn': {
        position: 'absolute',
        right: theme.spacing(2),
        marginTop: `-${theme.spacing(1)}`,
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      '& .networkbox__desktop-anchor, & .networkbox__mobile-anchor': {
        /* Secondary Color/Royal Blue 01 */
        color: theme.palette.secondary.dark,
        fontSize: theme.typography.overline.fontSize,
        borderRadius: theme.spacing(1.5),
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'row wrap',
        gap: theme.spacing(0.5),
        padding: '20% 0',
        '&:hover': {
          opacity: 1,
        },
      },
      '& .networkbox__desktop-anchor': {
        display: 'none',
        position: 'relative',
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          '&:hover .networkbox__popover': {
            display: 'flex !important',
          },
        },
        '& .networkbox__popover': {
          pointerEvents: 'none',
        },
        '&:hover .networkbox__popover': {
          [theme.breakpoints.up('md')]: {
            display: 'flex !important',
          },
        },
        '& .networkbox__explore-btn': {
          display: 'none',
        },
      },
      '& .networkbox__mobile-anchor': {
        display: 'flex',
        position: 'static',
        gap: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      '& .networkbox__mobile-popover-contaier': {
        display: 'block',
        alignSelf: 'flex-start',
        cursor: 'pointer',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
        '&.networkbox__active .networkbox__popover': {
          display: 'flex !important',
        },
        '& .networkbox__popover': {
          left: theme.spacing(3),
          right: theme.spacing(3),
        },
        '& .MuiTypography-h3': {
          fontSize: theme.typography.h5.fontSize,
        },
        '& .MuiTypography-h6, & .MuiTypography-body1': {
          fontSize: theme.typography.body2.fontSize,
        },
      },
      '& .MuiTypography-h4': {
        textOverflow: 'clip',
        width: '100%',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.typography.h6.fontSize,
        },
      },
      '& .networkbox__popover': {
        position: 'absolute',
        display: 'none',
        zIndex: 3,
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
          marginTop: `-${theme.spacing(1)}`,
        },
        [theme.breakpoints.up('md')]: {
          minWidth: '125%',
          minHeight: '125%',
          maxWidth: theme.spacing(34),
          maxHeight: theme.spacing(27.25),
        },
        boxShadow: theme.shadows[1],
        /* Secondary Color/Royal Blue Transparent 03 */
        backgroundColor: alpha(theme.palette.primary.main, 0.7),
        ...theme.mixins.blur03,
        color: theme.palette.text.primary,
        borderRadius: theme.spacing(1.5),
        flexFlow: 'row wrap',
        gap: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'flex-start',
        '& .MuiTypography-h6': {
          textAlign: 'left',
        },
        '& .MuiTypography-body1': {
          textAlign: 'right',
        },
        '& > .MuiBox-root:nth-of-type(1)': {
          display: 'flex',
          flexFlow: 'row nowrap',
          gap: theme.spacing(1),
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontWeight: theme.typography.fontWeightBold,
          width: '100%',
        },
        '& > .MuiBox-root:nth-of-type(2)': {
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'space-between',
          gap: theme.spacing(1),
          width: '100%',
          '& > .MuiBox-root': {
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            gap: theme.spacing(3),
            alignItems: 'center',
            '& > .MuiBox-root': {
              flex: '1 0 auto',
            },
            '& > .MuiBox-root:nth-of-type(1)': {
              fontWeight: theme.typography.fontWeightBold,
              textAlign: 'left',
            },
            '& > .MuiBox-root:nth-of-type(2)': {
              textAlign: 'right',
            },
          },
        },
      },
    }),
  };
};

export default useStyles;
