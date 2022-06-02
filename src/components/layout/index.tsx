import React from 'react';
import {
  Nav,
  Footer,
} from '..';
import { LayoutProps } from './types';
import { useStyles } from './styles';

const Layout: React.FC<LayoutProps & ComponentDefault> = (props) => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <img className="back back-1" src="/images/background/back-1.svg" alt="back-1" />
      <img className="back back-2" src="/images/background/back-2.svg" alt="back-2" />
      <img className="back back-3" src="/images/background/back-3.svg" alt="back-3" />
      <Nav />
      <div className={classes.content}>
        {props.children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
