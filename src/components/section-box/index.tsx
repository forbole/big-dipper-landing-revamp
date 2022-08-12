import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';
import { SectionBoxProps } from './types';
/**
 * Component for seo sectioning and breakpoints. Not to be confused with Box.
 * Use main is the page has one main section to standardise the padding
 * @param props
 * @returns
 */
const SectionBox: React.FC<SectionBoxProps & ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <section className={classnames(classes.root, props.className, { main: props.main })}>
      {props.children}
    </section>
  );
};

export default SectionBox;
