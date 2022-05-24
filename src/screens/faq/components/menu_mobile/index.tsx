import React from 'react';
import classnames from 'classnames';
import { MenuType } from '../../types';

const MenuMobile: React.FC<MenuType & ComponentDefault> = (props) => {
  return (
    <div className={classnames(props.className)}>
      Menu Mobile
    </div>
  );
};

export default MenuMobile;
