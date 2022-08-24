import { FC } from 'react';
import classnames from 'classnames';
import { StyledSection } from './styles';
import { SectionBoxProps } from './types';
/**
 * Component for seo sectioning and breakpoints. Not to be confused with Box.
 * Use main is the page has one main section to standardise the padding
 * @param props
 * @returns
 */
const SectionBox: FC<SectionBoxProps & ComponentDefault> = ({ children, className, main }) => {
  return <StyledSection className={classnames(className, { main })}>{children}</StyledSection>;
};

export default SectionBox;
