import { ComponentProps } from 'react';
import HorizontalMenubar from '../HorizontalMenubar';

export interface MenuDesktopProps
  extends ComponentProps<typeof HorizontalMenubar> {
  isIcon: boolean;
  isMenu: boolean;
  toggleHamburgerMenu: () => void;
}
