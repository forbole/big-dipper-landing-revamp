import { styled } from '@mui/material/styles';

export const StyledMain = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  ...theme.mixins.gradientBackground,
}));

export const StyledDiv = styled('div')({
  flex: 1,
});
