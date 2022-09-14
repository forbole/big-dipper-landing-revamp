import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import classnames from 'classnames';
import { useInView, useScroll } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import handleScrollToTop from '~src/utils/handleScrollToTop';
import { Footer, Nav } from '..';
import type { LayoutProps } from './types';
import useStyles from './useStyles';

/**
 * The `Layout` React component.
 * @param  - FC<LayoutProps & HTMLAttributes<HTMLElement>>
 * @returns A styled main element with a box element inside of it. The box element has a nav, styled
 * div, and footer element inside of it.
 */
const Layout: FC<LayoutProps & JSX.IntrinsicElements['main']> = ({ children, className, ...props }) => {
  const navRef = useRef(null);
  const isFooterInView = useInView(navRef);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => scrollY.onChange((latest) => setScrolled(latest > 0)), [])
  const styles = useStyles();
  return (
    <main
      className={classnames(
        className,
        {
          layout__scrolled: scrolled,
          layout__footerinview: isFooterInView,
        },
        'layout__container'
      )}
      {...props}
      css={styles.root}
    >
      <Nav />
      <div className="layout__wrapper-content">{children}</div>
      <Footer ref={navRef} />
      <Fab className="layout__scroll-fab" onClick={handleScrollToTop}>
        <KeyboardArrowUpIcon width={36} height={36} />
      </Fab>
    </main>
  );
};

export default Layout;
