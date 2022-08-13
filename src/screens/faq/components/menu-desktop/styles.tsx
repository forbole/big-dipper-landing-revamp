import { styled } from '@mui/material/styles';

export const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: theme.spacing(2, 0),
  '& .button': {
    ...theme.mixins.buttonSecondary,
    margin: theme.spacing(1, 0),
  },
  '& .button--active': {
    ...theme.mixins.button,
  },
}));
