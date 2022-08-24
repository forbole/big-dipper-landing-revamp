import { styled } from '@mui/material/styles';

export const StyledSection = styled('section')(({ theme }) => ({
  overflow: 'auto',
  padding: theme.spacing(6, 3),
  [theme.breakpoints.up('lg')]: {
    '&.main': {
      padding: theme.spacing(8),
    },
  },
}));
