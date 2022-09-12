import classnames from 'classnames';
import { motion } from 'framer-motion';
import { ComponentProps, FC, forwardRef } from 'react';
import useStyles from './useStyles';

/**
 * Helper component to restraint content
 * from going past a certain width
 * @returns
 */
const SectionLimit: FC<ComponentProps<typeof motion.div>> = forwardRef(
  function _({ children, className, ...props }, ref) {
    const styles = useStyles();
    return (
      <motion.div
        className={classnames(className, 'sectionlimit__container')}
        {...props}
        ref={ref}
        css={styles.root}
      >
        {children}
      </motion.div>
    );
  }
);

export default SectionLimit;
