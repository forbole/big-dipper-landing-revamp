import classNames from 'classnames';
import { ComponentProps, FC, forwardRef } from 'react';
import SectionBox from '~src/components/SectionBox';
import SectionLimit from '~src/components/SectionLimit';
import MenuDesktop from './components/MenuDesktop';
import MenuMobile from './components/MenuMobile';
import { useNav } from './hooks';
import useStyles from './useStyles';

const Nav: FC<ComponentProps<typeof SectionBox>> = forwardRef(function _(
  { className, ...props },
  ref
) {
  const { isIcon, isMenu, toggleHamburgerMenu } = useNav();
  const styles = useStyles();

  return (
    <SectionBox
      className={classNames(className, 'nav__container')}
      {...props}
      ref={ref}
      css={styles.root}
    >
      <SectionLimit>
        <MenuDesktop
          isIcon={isIcon}
          isMenu={isMenu}
          toggleHamburgerMenu={toggleHamburgerMenu}
        />
        <MenuMobile isMenu={isMenu} toggleHamburgerMenu={toggleHamburgerMenu} />
      </SectionLimit>
    </SectionBox>
  );
});

// eslint-disable-next-line react/display-name
export default Nav;
