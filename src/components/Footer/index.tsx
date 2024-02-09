/* eslint-disable jsx-a11y/anchor-is-valid */
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { forwardRef, Fragment } from "react";
import handleScrollToTop from "@/src/utils/handleScrollToTop";
import useStyles from "./useStyles";
import { socialLinks, termsLinks } from "./utils";
import SectionLimit from "../SectionLimit";
import classnames from "classnames";

const Footer = forwardRef<HTMLElement, JSX.IntrinsicElements["footer"]>(
  function _({ className, ...props }, ref) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation("common");
    const year = new Date().getFullYear();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const styles = useStyles();

    return (
      <footer
        className={classnames(className, "footer__container")}
        {...props}
        css={styles.root}
        ref={ref}
      >
        <SectionLimit>
          <Box className="footer__scroll-top">
            <Fab onClick={handleScrollToTop}>
              <KeyboardArrowUpIcon width={36} height={36} />
            </Fab>
            <Box className="footer__bottom">
              <div className="footer__icons-wrapper">
                {socialLinks.map((x) => {
                  return (
                    <Link
                      key={x.className}
                      href={x.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`footer__social ${x.className}`}
                    >
                      {x.component}
                    </Link>
                  );
                })}
              </div>
              <div className="footer__terms-wrapper">
                <Typography variant="caption">
                  {t("copyright", { year })}
                </Typography>
                <Typography
                  variant="caption"
                  className="footer__terms-dash footer__desktop"
                >
                  |
                </Typography>
                <div className="footer__terms-links">
                  {termsLinks.map((x, i) => {
                    return (
                      <Fragment key={x.key}>
                        <Link
                          href={x.url}
                          target={x.external ? "_blank" : "_self"}
                        >
                          <Typography
                            variant="caption"
                            className="footer__link-item footer__link-item-caption"
                          >
                            {t(x.key)}
                          </Typography>
                        </Link>
                        {i !== termsLinks.length - 1 && (
                          <Typography
                            variant="caption"
                            className="footer__terms-dash"
                          >
                            |
                          </Typography>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
                <Typography
                  variant="caption"
                  className="footer__terms-dash footer__desktop"
                >
                  |
                </Typography>
                <Typography variant="caption">
                  <Trans
                    i18nKey="common:productOf"
                    components={{
                      a: (
                        <Link
                          href="https://www.forbole.com"
                          target="_blank"
                          rel="noreferrer"
                        />
                      ),
                    }}
                  />
                </Typography>
              </div>
            </Box>
          </Box>
        </SectionLimit>
      </footer>
    );
  },
);

// eslint-disable-next-line react/display-name
export default Footer;
