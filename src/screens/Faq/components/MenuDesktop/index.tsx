import Button from '@mui/material/Button';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import type { ComponentProps, FC } from 'react';
import type { MenuType } from './types';
import useStyles from './useStyles';

const MenuDesktop: FC<MenuType & ComponentProps<typeof motion.nav>> = ({
  handleChange,
  items,
  selected,
  ...props
}) => {
  const styles = useStyles();
  return (
    <motion.nav {...props} css={styles.root}>
      {items.map((x, i) => {
        return (
          <Button
            key={x}
            variant="contained"
            className={classnames(
              {
                menudesktop__active: i === selected,
              },
              'menudesktop__button'
            )}
            onClick={() => handleChange?.(i)}
          >
            {x}
          </Button>
        );
      })}
    </motion.nav>
  );
};

export default MenuDesktop;
