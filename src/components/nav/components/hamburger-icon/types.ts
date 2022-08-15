import { StyledButton } from './styles';

export type HamburgerIconProps = {
  isIcon: boolean;
  toggleHamburgerMenu: () => void;
} & React.ComponentProps<typeof StyledButton>;
