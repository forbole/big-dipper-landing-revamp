import classnames from "classnames";
import type { ComponentProps, FC } from "react";

import SectionBox from "@/src/components/SectionBox";
import SectionLimit from "@/src/components/SectionLimit";

import MenuDesktop from "./components/MenuDesktop";
import MenuMobile from "./components/MenuMobile";
import { useNav } from "./hooks";
import useStyles from "./useStyles";

const Nav: FC<ComponentProps<typeof SectionBox>> = ({
  className,
  ...props
}) => {
  const { isMenu, toggleHamburgerMenu } = useNav();
  const styles = useStyles();

  return (
    <SectionBox
      className={classnames(className, "nav__container")}
      {...props}
      css={styles.root}
    >
      <SectionLimit>
        <MenuDesktop
          isMenu={isMenu}
          toggleHamburgerMenu={toggleHamburgerMenu}
        />
        <MenuMobile isMenu={isMenu} toggleHamburgerMenu={toggleHamburgerMenu} />
      </SectionLimit>
    </SectionBox>
  );
};

// eslint-disable-next-line react/display-name
export default Nav;
