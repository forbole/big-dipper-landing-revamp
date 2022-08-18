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
    <StyledSectionLimit>
      <Wrapper>
        <Link href={HOME} passHref>
          <a href="/#">
            <StyledDBLogo className="logo" height={36} />
          </a>
        </Link>
        <StyledHamburgerIcon
          toggleHamburgerMenu={toggleHamburgerMenu}
          isIcon={isIcon}
          sx={{ display: isMenu ? 'none' : undefined }}
        />
        <StyledMenuBar className="menubar">
          <MenuItems />
        </StyledMenuBar>
      </Wrapper>
      <DropdownMenu isMenu={isMenu} toggleHamburgerMenu={toggleHamburgerMenu} />
    </StyledSectionLimit>
  );
};

export default Nav;
