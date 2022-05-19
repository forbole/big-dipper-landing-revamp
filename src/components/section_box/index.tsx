import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';

/**
 * Component for seo sectioning and breakpoints. Not to be confused with Box
 * @param props
 * @returns
 */
const SectionBox: React.FC<{
  children: React.ReactNode
} & ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <section className={classnames(classes.root, props.className)}>
      {props.children}
    </section>
  );
};

export default SectionBox;
