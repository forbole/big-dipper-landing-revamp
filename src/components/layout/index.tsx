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
      <Nav />
      <div className={classes.content}>
        {props.children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
