import { css, darken, useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      minWidth: theme.spacing(30),
      minHeight: theme.spacing(10),
      borderRadius: theme.spacing(1.5),
      backgroundColor: theme.palette.grey.A400,
      border: `2px solid ${theme.palette.text.primary}`,
      display: 'inline-flex',
      justifyContent: 'center',
      flexFlow: 'row wrap',
      alignItems: 'center',
      textAlign: 'center',
      cursor: 'pointer',
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        minWidth: theme.spacing(28),
      },
      '& .MuiTypography-h4': {
        [theme.breakpoints.down('md')]: {
          fontSize: theme.typography.h6.fontSize,
        },
      },
      '& .MuiTypography-body2': {
        fontSize: theme.typography.h4.fontSize,
        [theme.breakpoints.down('md')]: {
          fontSize: theme.typography.caption.fontSize,
        },
      },
      '&&:hover, &&.networkbox__active': {
        backgroundColor: theme.palette.grey[300],
      },

      '& .networkbox__popover': {
        position: 'absolute',
        zIndex: 2000,
        borderRadius: theme.spacing(1.5),
        padding: theme.spacing(1, 0),
        flexFlow: 'column nowrap',
        gap: theme.spacing(1),
        top: '110%',
        width: 'calc(100% + 2px)',
        marginLeft: '-2px',
        backgroundColor: theme.palette.grey.A200,
        color: theme.palette.common.black,
        outline: `1px solid ${theme.palette.common.black}`,
        boxShadow: theme.shadows[2],
        '& .MuiListItemButton-root': {
          padding: `${theme.spacing(1, 2, 3)} !important`,
          // eslint-disable-next-line max-len
          backgroundImage: `linear-gradient(0deg, ${
            theme.palette.grey.A200
          }, ${darken(theme.palette.grey.A200, 0.05)} 60%, ${
            theme.palette.grey.A200
          })`,
          '&:hover': {
            backgroundColor: theme.palette.grey.A400,
          },
          '& .MuiListItemIcon-root': {
            color: theme.palette.common.black,
          },
        },
        '& > .MuiBox-root:nth-of-type(1)': {
          display: 'flex',
          flexFlow: 'row nowrap',
          gap: theme.spacing(1),
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: theme.typography.fontWeightBold,
        },
        '& > .MuiBox-root:nth-of-type(2)': {
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'space-between',
          gap: theme.spacing(1),
          '& > .MuiBox-root': {
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            gap: theme.spacing(1),
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
        '& .MuiTypography-h5': {
          /* Secondary Color/Royal Blue 01 */
          color: theme.palette.secondary.dark,
        },
        '& .MuiTypography-h6': {
          /* Secondary Color/Royal Blue 01 */
          color: theme.palette.secondary.dark,
        },
      },
      '& .image': {
        backgroundColor: theme.palette.common.white,
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
      '& .networkbox__dropdown-btn': {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexFlow: 'row unwrap',
        padding: theme.spacing(0, 3),
        gap: theme.spacing(2),
        textAlign: 'left',
        cursor: 'pointer',
        '& .MuiSvgIcon-root': {
          /* Neutral Color/Dark Grey */
          color: theme.palette.grey[800],
        },
        '& .MuiBox-root': {
          flex: '1 1 auto',
        },
        '& .MuiTypography-h4': {
          /* Primary Color/Forbole Blue 01 */
          color: theme.palette.primary.contrastText,
        },
        '& .MuiTypography-body2': {
          /* Secondary Color/Royal Blue 01 */
          color: theme.palette.secondary.dark,
          lineHeight: 1,
        },

        '& .MuiBadge-badge': {
          transform: 'scale(1) translate(1.5rem, -0.1rem)',
        },
      },
    }),
  };
};

export default useStyles;
