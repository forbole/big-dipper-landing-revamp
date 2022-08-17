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
    background: 'linear-gradient(103.18deg, #F6504B 20.77%, #DC001A 118.69%)',
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  background: '#334198',
  width: '80vw',
  padding: `${theme.spacing(2)} 0`,
  borderRadius: theme.spacing(2),
  margin: 'auto',
}));
