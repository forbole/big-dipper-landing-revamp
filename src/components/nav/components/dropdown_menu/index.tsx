import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';
import MenuItems from './components/menu_items';

const DropdownMenu = (props:{isMenu:boolean}) => {
  const classes = useStyles();
  const {
    isMenu,
  } = props;

  return (
    <div className={classnames(classes.root, isMenu ? 'modal-open' : 'modal-close')}>
      <MenuItems />
    </div>

  );
};

export default DropdownMenu;
