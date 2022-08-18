import { styled } from '@mui/material/styles';
import { ListItemButton, Modal, Paper } from '@mui/material';

export const StyledModal = styled(Modal)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  '&.MuiListItem-gutters': {
    padding: theme.spacing(2, 2.5),
  },
  '& .MuiListItemText-root': {
    color: theme.palette.common.white,
  },
  '&.active': {
    background: theme.palette.background.activeMenuItem,
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.mobileMenu,
  width: '80vw',
  padding: `${theme.spacing(2)} 0`,
  borderRadius: theme.spacing(2),
  margin: 'auto',
}));
