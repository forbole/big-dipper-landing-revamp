import { styled } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  textAlign: 'left',
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  '&.MuiListItem-gutters': {
    padding: theme.spacing(2, 2.5),
  },
  '& .MuiListItemText-root': {
    color: theme.palette.common.white,
    fontWeight: 900,
  },
  '&.active': {
    background: theme.palette.background.activeMenuItem,
  },
  '&.submenu': {
    background: theme.palette.background.desktopMenu,
  },
}));
