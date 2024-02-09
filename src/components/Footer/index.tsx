/* eslint-disable jsx-a11y/anchor-is-valid */
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import classnames from "classnames";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Fragment, forwardRef } from "react";

import handleScrollToTop from "@/src/utils/handleScrollToTop";

import SectionLimit from "../SectionLimit";
import useStyles from "./useStyles";
import { socialLinks, termsLinks } from "./utils";

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
              <KeyboardArrowUpIcon height={36} width={36} />
            </Fab>
            <Box className="footer__bottom">
              <div className="footer__icons-wrapper">
                {socialLinks.map((x) => (
                  <Link
                    className={`footer__social ${x.className}`}
                    href={x.url}
                    key={x.className}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {x.component}
                  </Link>
                ))}
              </div>
              <div className="footer__terms-wrapper">
                <Typography variant="caption">
                  {t("copyright", { year })}
                </Typography>
                <Typography
                  className="footer__terms-dash footer__desktop"
                  variant="caption"
                >
                  |
                </Typography>
                <div className="footer__terms-links">
                  {termsLinks.map((x, i) => (
                    <Fragment key={x.key}>
                      <Link
                        href={x.url}
                        target={x.external ? "_blank" : "_self"}
                      >
                        <Typography
                          className="footer__link-item footer__link-item-caption"
                          variant="caption"
                        >
                          {t(x.key)}
                        </Typography>
                      </Link>
                      {i !== termsLinks.length - 1 && (
                        <Typography
                          className="footer__terms-dash"
                          variant="caption"
                        >
                          |
                        </Typography>
                      )}
                    </Fragment>
                  ))}
                </div>
                <Typography
                  className="footer__terms-dash footer__desktop"
                  variant="caption"
                >
                  |
                </Typography>
                <Typography variant="caption">
                  <Trans
                    components={{
                      a: (
                        <Link
                          href="https://www.forbole.com"
                          rel="noreferrer"
                          target="_blank"
                        />
                      ),
                    }}
                    i18nKey="common:productOf"
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
