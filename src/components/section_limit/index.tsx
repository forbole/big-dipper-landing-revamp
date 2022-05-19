import React from 'react';
import { useStyles } from './styles';

/**
 * Helper component to restraint content
 * from going past a certain width
 * @returns
 */
const SectionLimit: React.FC<{children: React.ReactNode} & ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
};

export default SectionLimit;
