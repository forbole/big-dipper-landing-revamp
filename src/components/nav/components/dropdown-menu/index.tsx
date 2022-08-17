import { FC } from 'react';
import { Wrapper, StyledHamburgerIcon } from '../../styles';
import { StyledPaper, StyledModal } from './styles';
import { DropdownMenuProps } from './types';
import MenuItems from './components/menu-items';

const DropdownMenu: FC<DropdownMenuProps> = ({ isMenu, toggleHamburgerMenu }) => {
  return (
    <StyledModal open={isMenu} sx={{ backdropFilter: 'blur(10px)' }}>
      <>
        <Wrapper>
          <StyledHamburgerIcon toggleHamburgerMenu={toggleHamburgerMenu} isIcon={false} />
        </Wrapper>
        <StyledPaper>
          <MenuItems />
        </StyledPaper>
      </>
    </StyledModal>
  );
};

export default DropdownMenu;
