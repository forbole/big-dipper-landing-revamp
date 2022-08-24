import { FC } from 'react';
import { StyledButton } from './styles';
import { HamburgerProps } from './types';

const HamburgerIcon: FC<HamburgerProps> = ({ isIcon, toggleHamburgerMenu }) => {
  return (
    <StyledButton onClick={toggleHamburgerMenu} type="button">
      <div className={isIcon ? 'hamburger' : 'hamburger-X'}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    </StyledButton>
  );
};

export default HamburgerIcon;
