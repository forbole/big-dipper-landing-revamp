import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';
import MenuItems from './components/menu-items';

const DropdownMenu: React.FC<{
  isMenu:boolean
}> = ({
  isMenu,
}) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.root, isMenu ? 'modal-open' : 'modal-close')}>
      <MenuItems />
    </div>

  );
};

export default DropdownMenu;
