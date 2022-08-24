import { styled } from '@mui/material/styles';

export const StyledDiv = styled('div')(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: theme.breakpoints.limit,
}));
