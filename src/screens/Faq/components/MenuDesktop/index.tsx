import Button from '@mui/material/Button';
import classnames from 'classnames';
import type { FC } from 'react';
import type { MenuType } from './types';
import useStyles from './useStyles';

const MenuDesktop: FC<MenuType & JSX.IntrinsicElements['nav']> = ({
  handleChange,
  items,
  selected,
  ...props
}) => {
  const styles = useStyles();
  return (
    <nav {...props} css={styles.root}>
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
    </nav>
  );
};

export default MenuDesktop;
