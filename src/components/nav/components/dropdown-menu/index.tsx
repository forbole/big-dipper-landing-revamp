import { FC } from 'react';
import classnames from 'classnames';
import { StyledDiv } from './styles';
import MenuItems from './components/menu-items';
import { DropdownMenuProps } from './types';

const DropdownMenu: FC<DropdownMenuProps> = ({ isMenu, ...props }) => {
  return (
    <StyledDiv className={classnames(isMenu ? 'modal-open' : 'modal-close')} {...props}>
      <MenuItems />
    </StyledDiv>
  );
};

export default DropdownMenu;
