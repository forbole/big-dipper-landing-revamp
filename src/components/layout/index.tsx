import { FC, HTMLAttributes } from 'react';
import { Nav, Footer } from '..';
import { LayoutProps } from './types';
import { StyledMain, StyledDiv } from './styles';

const Layout: FC<LayoutProps & HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <StyledMain>
      <Nav />
      <StyledDiv>{children}</StyledDiv>
      <Footer />
    </StyledMain>
  );
};

export default Layout;
