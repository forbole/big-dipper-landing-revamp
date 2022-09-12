import classnames from 'classnames';
import { ComponentProps, FC, forwardRef } from 'react';
import useStyles from './useStyles';
import { motion } from 'framer-motion';

/**
 * A functional component that takes in children and className as props.
 * @param  - FC<ComponentProps<typeof motion.div>>
 * @returns A styled div with the children and className passed in as props.
 */
const ContentBox: FC<ComponentProps<typeof motion.div>> = forwardRef(function _(
  { className, ...props },
  ref
) {
  const styles = useStyles();
  return (
    <motion.div
      css={styles.root}
      {...props}
      className={classnames(className, 'contentbox__container')}
      ref={ref}
    />
  );
});

export default ContentBox;
