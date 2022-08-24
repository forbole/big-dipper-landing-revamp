import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material';

export const StyledDiv = styled('div')(({ theme }) => ({
  border: `solid ${alpha(theme.palette.custom.general.white, 0.1)} 2px`,
  overflow: 'auto',
  padding: theme.spacing(3),
  borderRadius: '0.75rem',
  background: alpha(theme.palette.custom.general.white, 0.1),
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4),
  },
}));
