import { FC, HTMLAttributes } from 'react';
import { StyledDiv } from './styles';

const ContentBox: FC<HTMLAttributes<HTMLElement>> = ({ children, className }) => {
  return <StyledDiv className={className}>{children}</StyledDiv>;
};

export default ContentBox;
