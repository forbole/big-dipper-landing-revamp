import { styled } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  textAlign: 'center',
  '&.MuiListItem-gutters': {
    padding: theme.spacing(2, 2.5),
  },
  '& .MuiListItemText-root': {
    color: theme.palette.common.white,
  },
  '&.active': {
    background: 'linear-gradient(103.18deg, #F6504B 20.77%, #DC001A 118.69%)',
  },
}));
