import Button from '@mui/material/Button';
import { FC, forwardRef } from 'react';
import type { HamburgerIconProps } from './types';
import useStyles from './useStyles';

const HamburgerIcon: FC<HamburgerIconProps> = forwardRef(function _(
  { isIcon, toggleHamburgerMenu, ...props },
  ref
) {
  const styles = useStyles();
  return (
    <Button
      onClick={toggleHamburgerMenu}
      type="button"
      {...props}
      ref={ref}
      css={styles.root}
    >
      <div className={isIcon ? 'hambergericon__menu' : 'hambergericon__x'}>
        <div className="hambergericon__bar1" key="b1" />
        <div className="hambergericon__bar2" key="b2" />
        <div className="hambergericon__bar3" key="b3" />
      </div>
    </Button>
  );
});

export default HamburgerIcon;
