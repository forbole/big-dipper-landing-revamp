import React from 'react';
import classnames from 'classnames';

const MenuDesktop: React.FC<ComponentDefault> = (props) => {
  return (
    <div className={classnames(props.className)}>
      desktop menu
    </div>
  );
};

export default MenuDesktop;
