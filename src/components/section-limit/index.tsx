import { FC, HTMLAttributes } from 'react';
import { StyledDiv } from './styles';

/**
 * Helper component to restraint content
 * from going past a certain width
 * @returns
 */
const SectionLimit: FC<HTMLAttributes<HTMLElement>> = ({ children, className }) => {
  return <StyledDiv className={className}>{children}</StyledDiv>;
};

export default SectionLimit;
