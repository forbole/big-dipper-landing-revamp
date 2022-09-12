import classnames from 'classnames';
import { motion } from 'framer-motion';
import { ComponentProps, FC, forwardRef } from 'react';
import useStyles from './useStyles';

/**
 * Component for seo sectioning and breakpoints. Not to be confused with Box.
 * Use main is the page has one main section to standardize the padding
 * @param  - FC<ComponentProps<typeof StyledSection>
 * @returns A styled component
 */
const SectionBox: FC<
  ComponentProps<typeof motion.section> & { main?: boolean }
> = forwardRef(function _({ children, className, main, ...props }, ref) {
  const styles = useStyles();
  return (
    <motion.section
      className={classnames(
        className,
        { sectionbox__main: main },
        'sectionbox__container'
      )}
      {...props}
      ref={ref}
      css={styles.root}
    >
      {children}
    </motion.section>
  );
});

// eslint-disable-next-line react/display-name
export default SectionBox;
