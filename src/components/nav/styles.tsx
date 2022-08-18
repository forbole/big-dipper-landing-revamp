import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import BDLogo from '@assets/big-dipper-red.svg';
import SectionLimit from '../section-limit';
import HamburgerIcon from './components/hamburger-icon';

export const StyledMenuBar = styled(Box)(({ theme }) => ({
  display: 'none',
  width: 'auto',
  justifyContent: 'right',
  [theme.breakpoints.up('md')]: {
    display: 'inline-flex',
  },
  '& > .MuiList-root > .MuiListItemButton-root:first-of-type': {
    display: 'none !important',
  },
  '& .MuiList-root': {
    display: 'flex',
  },
  '& .MuiButtonBase-root': {
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  },
  '& .submenu, & .active': {
    background: 'transparent none !important',
  },
  '& .active.submenu': {
    background: `${theme.palette.background.activeMenuItem} !important`,
  },
  '& .submenu-box': {
    display: 'inline-flex',
    position: 'relative',
  },
  '& .submenu-container': {
    position: 'absolute',
    top: '100%',
    width: '100%',
    marginTop: theme.spacing(2),
    background: theme.palette.background.desktopMenu,
    borderRadius: theme.spacing(2),
    zIndex: 10,
  },
  '& .submenu-container .MuiButtonBase-root': {
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  },
}));

export const StyledSectionLimit = styled(SectionLimit)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  '& > button': {
    height: '60px',
    position: 'absolute',
    padding: theme.spacing(5),
    zIndex: 1,
  },
}));

export const StyledDBLogo = styled(BDLogo)(({ theme }) => ({
  height: '36px',
  display: 'block',
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(1),
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '79px',
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
  },
  '& .menubar .MuiButtonBase-root': {
    borderRadius: theme.spacing(3),
  },
  '& .menubar .submenu-container .MuiButtonBase-root': {
    borderRadius: 0,
  },
  '& .menubar .submenu-container .MuiButtonBase-root:first-of-type': {
    borderTopLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2),
  },
  '& .menubar .submenu-container .MuiButtonBase-root:last-of-type': {
    borderBottomLeftRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
  },
}));

export const StyledHamburgerIcon = styled(HamburgerIcon)(({ theme }) => ({
  zIndex: 2,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
