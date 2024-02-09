import Button from "@mui/material/Button";
import { FC } from "react";
import { HamburgerIconProps } from "./types";
import useStyles from "./useStyles";

const HamburgerIcon: FC<HamburgerIconProps> = ({
  toggleHamburgerMenu,
  ...props
}) => {
  const styles = useStyles();
  return (
    <Button
      onClick={toggleHamburgerMenu}
      type="button"
      {...props}
      css={styles.root}
    >
      <div className={"hambergericon__menu"}>
        <div className="hambergericon__bar1" key="b1" />
        <div className="hambergericon__bar2" key="b2" />
        <div className="hambergericon__bar3" key="b3" />
      </div>
    </Button>
  );
};

export default HamburgerIcon;
