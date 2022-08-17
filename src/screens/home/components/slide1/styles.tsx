import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
});

export const StyledTypography1 = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  textShadow: '2px 2px rgba(0,0,0,0.2)',
  fontSize: '1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}));

export const StyledTypography2 = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  textShadow: '2px 2px rgba(0,0,0,0.2)',
  fontSize: '0.8rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}));
