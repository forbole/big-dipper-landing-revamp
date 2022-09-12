import { ComponentProps } from 'react';
import HorizontalMenubar from '../HorizontalMenubar';

export interface MenuMobileProps
  extends ComponentProps<typeof HorizontalMenubar> {
  isMenu: boolean;
  toggleHamburgerMenu: () => void;
}
