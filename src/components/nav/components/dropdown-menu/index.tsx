import { FC } from 'react';
import classnames from 'classnames';
import { StyledDiv } from './styles';
import MenuItems from './components/menu-items';

const DropdownMenu: FC<{
  isMenu: boolean;
}> = ({ isMenu }) => {
  return (
    <StyledDiv className={classnames(isMenu ? 'modal-open' : 'modal-close')}>
      <MenuItems />
    </StyledDiv>
  );
};

export default DropdownMenu;
