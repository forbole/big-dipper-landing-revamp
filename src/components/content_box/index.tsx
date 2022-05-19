import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';

const ContentBox: React.FC<{children: React.ReactNode} & ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, props.className)}>
      {props.children}
    </div>
  );
};

export default ContentBox;
