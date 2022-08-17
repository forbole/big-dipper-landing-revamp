import { FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import { HOME } from '@utils/links';
import {
  StyledSectionLimit,
  Wrapper,
  StyledDBLogo,
  StyledHamburgerIcon,
  StyledMenuBar,
} from './styles';
import DropdownMenu from './components/dropdown-menu';
import { useNav } from './hooks';
import MenuItems from './components/menu-items';

const Nav: FC<HTMLAttributes<HTMLElement>> = () => {
  const { isIcon, isMenu, toggleHamburgerMenu } = useNav();

  return (
    <div>
      <StyledSectionLimit>
        <div className="wrapper">
          <BDLogo className="logo" height={36} />
          <HamburgerIcon toggleHamburgerMenu={toggleHamburgerMenu} isIcon={isIcon} />
        </div>
        <DropdownMenu isMenu={isMenu} />
      </StyledSectionLimit>
    </div>
  );
};

export default Nav;
