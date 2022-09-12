import { ButtonProps } from '@mui/material/Button';

export interface HamburgerIconProps extends ButtonProps {
  isIcon: boolean;
  toggleHamburgerMenu: () => void;
}
