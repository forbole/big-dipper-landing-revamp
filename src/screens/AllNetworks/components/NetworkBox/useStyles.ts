import { css, useTheme } from '@mui/material';
import { alpha } from '@mui/system';

const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      minWidth: theme.spacing(30),
      minHeight: theme.spacing(10),
      borderRadius: theme.spacing(1.5),
      backgroundColor: alpha(theme.palette.common.white, 0.6),
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
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('md')]: {
          fontSize: theme.typography.h6.fontSize,
        },
      },
      '& .MuiTypography-body2': {
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('md')]: {
          fontSize: theme.typography.caption.fontSize,
        },
      },
      '&&:hover, &&.networkbox__active': {
        backgroundColor: alpha(theme.palette.common.white, 0.8),
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
        backgroundColor: alpha(theme.palette.common.white, 0.8),
        color: theme.palette.common.black,
        boxShadow: theme.shadows[2],
        ...theme.mixins.blur03,
        '& .MuiListItemButton-root': {
          padding: `${theme.spacing(1, 3)} !important`,
          // eslint-disable-next-line max-len
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.2),
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
        minWidth: '100%',
        minHeight: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: theme.spacing(0, 3),
        textAlign: 'left',
        cursor: 'pointer',
        '& .MuiSvgIcon-root': {
          /* Neutral Color/Dark Grey */
          color: theme.palette.grey[800],
        },
        '& .MuiBox-root:nth-of-type(2)': {
          flex: '1 1 auto',
          overflow: 'hidden',
          flexDirection: 'column',
          alignItems: 'stretch',
          marginLeft: theme.spacing(2),
        },
        '& .MuiTypography-h4': {
          /* Primary Color/Forbole Blue 01 */
          color: theme.palette.primary.contrastText,
        },
        '& .networkbox__subtitlecontainer': {
          width: '100%',
          position: 'relative',
          height: '1rem',
          '& .MuiTypography-body2': {
            position: 'absolute',
            left: 0,
            right: 0,
            /* Secondary Color/Royal Blue 01 */
            color: theme.palette.secondary.dark,
            lineHeight: 1,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          },
        },

        '& .MuiBadge-root': {
          position: 'absolute',
          color: theme.palette.common.white,
          marginLeft: theme.spacing(6),
          marginTop: theme.spacing(4),
        },
      },
    }),
  };
};

export default useStyles;
