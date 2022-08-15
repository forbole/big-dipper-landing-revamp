import { styled } from '@mui/material/styles';

export const StyledDiv = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 0),
  width: '272px',
  background: 'rgba(62, 35, 79, 0.7)',
  borderRadius: '12px',
  backdropFilter: 'blur(24px)',
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: '0',
  right: '0',
  zIndex: 1,
  '&.modal-close': {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
    width: 'auto',
    background: 'transparent none',
    top: 0,
    bottom: 0,
    left: '50%',
    right: 0,
    '&.modal-close': {
      display: 'unset',
    },
    '& .MuiList-root': {
      display: 'flex',
      margin: 0,
      padding: 0,
      background: 'transparent none',
    },
    '& .MuiList-root > .MuiListItemButton-root': {
      background: 'transparent none',
    },
    '& .MuiList-root > .MuiListItemButton-root:first-of-type': {
      display: 'none',
    },
  },
}));
