import classnames from "classnames";
import { FC } from "react";
import useStyles from "./useStyles";

/**
 * Component for seo sectioning and breakpoints. Not to be confused with Box.
 * Use main is the page has one main section to standardize the padding
 * @param  - FC<ComponentProps<typeof StyledSection>
 * @returns A styled component
 */
const SectionBox: FC<JSX.IntrinsicElements["section"] & { main?: boolean }> = ({
  children,
  className,
  main,
  ...props
}) => {
  const styles = useStyles();
  return (
    <section
      className={classnames(
        className,
        { sectionbox__main: main },
        "sectionbox__container",
      )}
      {...props}
      css={styles.root}
    >
      {children}
    </section>
  );
};

// eslint-disable-next-line react/display-name
export default SectionBox;
