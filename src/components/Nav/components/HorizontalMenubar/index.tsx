import classnames from "classnames";
import { FC } from "react";
import useStyles from "./useStyles";

const HorizontalMenubar: FC<JSX.IntrinsicElements["nav"]> = ({
  className,
  ...props
}) => {
  const styles = useStyles();
  return (
    <nav
      className={classnames(className, "horizontalmenubar__container")}
      {...props}
      css={styles.root}
    />
  );
};

export default HorizontalMenubar;
