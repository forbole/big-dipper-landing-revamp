import { FC, HTMLAttributes } from 'react';
import BDLogo from '@assets/big-dipper-red.svg';
import { StyledSectionLimit } from './styles';
import HamburgerIcon from './components/hamburger-icon';
import DropdownMenu from './components/dropdown-menu';
import { useNav } from './hooks';

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
