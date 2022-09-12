import classnames from 'classnames';
import { motion } from 'framer-motion';
import { ComponentProps, FC, forwardRef } from 'react';
import useStyles from './useStyles';

const HorizontalMenubar: FC<ComponentProps<typeof motion.nav>> = forwardRef(
  function _({ className, ...props }, ref) {
    const styles = useStyles();
    return (
      <motion.nav
        css={styles.root}
        className={classnames(className, 'horizontalmenubar__container')}
        {...props}
        ref={ref}
      />
    );
  }
);

export default HorizontalMenubar;
