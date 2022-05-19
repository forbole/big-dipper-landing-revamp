import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';
import { SectionLimitProps } from './types';

/**
 * Helper component to restraint content
 * from going past a certain width
 * @returns
 */
const SectionLimit: React.FC<SectionLimitProps & ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, props.className)}>
      {props.children}
    </div>
  );
};

export default SectionLimit;
