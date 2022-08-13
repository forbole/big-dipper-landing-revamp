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
  [theme.breakpoints.up('md')]: {
    width: '216px',
    top: '88px',
    margin: '0',
    left: 'unset',
    right: theme.spacing(2),
  },
  [theme.breakpoints.up('lg')]: {
    right: 'calc(calc(100vw - 1024px) / 2)',
  },
  '&.modal-close': {
    display: 'none',
  },
}));
