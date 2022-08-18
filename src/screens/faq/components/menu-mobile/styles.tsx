import { styled } from '@mui/material/styles';
import { alpha, Menu } from '@mui/material';

export const StyledDiv = styled('div')(({ theme }) => ({
  '& .selected': {
    ...theme.mixins.button,
    padding: theme.spacing(1, 3),
  },
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
  marginTop: theme.spacing(1),
  '& .MuiMenuItem-root': {
    padding: theme.spacing(2, 4),
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  '& .MuiMenuItem-root.active': {
    ...theme.mixins.button,
    borderRadius: 0,
  },
  '& .MuiList-padding': {
    padding: 0,
  },
  '& .MuiMenu-paper': {
    background: alpha(theme.palette.background.mobileMenu, 0.7),
    backdropFilter: 'blur(24px)',
  },
}));
