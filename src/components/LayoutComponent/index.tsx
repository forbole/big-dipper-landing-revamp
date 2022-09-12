import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import classnames from 'classnames';
import { motion, useInView, useScroll, Variants } from 'framer-motion';
import { ComponentProps, FC, useEffect, useRef, useState } from 'react';
import handleScrollToTop from '~src/utils/handleScrollToTop';
import { Footer, Nav } from '..';
import type { LayoutProps } from './types';
import useStyles from './useStyles';

const variants: Variants = {
  initial: { y: 0, transition: { duration: 0.3, delay: 0.3 } },
  scrollingDown: { y: '-100%', transition: { duration: 1 } },
};

/**
 * The `Layout` React component.
 * @param  - FC<LayoutProps & HTMLAttributes<HTMLElement>>
 * @returns A styled main element with a box element inside of it. The box element has a nav, styled
 * div, and footer element inside of it.
 */
const Layout: FC<LayoutProps & ComponentProps<typeof motion.main>> = ({
  children,
  className,
  ...props
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const prevScrollY = useRef(0);
  const { scrollY } = useScroll();

  const navRef = useRef(null);
  const isFooterInView = useInView(navRef);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 0);
      setScrollingDown(latest > 80 && latest > prevScrollY.current);
      prevScrollY.current = latest;
    });
  }, [scrollY]);

  const styles = useStyles();
  return (
    <motion.main
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
      <Nav
        layout
        variants={variants}
        initial="initial"
        animate={scrollingDown ? 'scrollingDown' : 'initial'}
      />
      <div className="layout__wrapper-content">{children}</div>
      <Footer ref={navRef} />
      <Fab className="layout__scroll-fab" onClick={handleScrollToTop}>
        <KeyboardArrowUpIcon width={36} height={36} />
      </Fab>
    </motion.main>
  );
};

export default Layout;
