import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import type { RefObject } from "react";
import { useCallback, useRef } from "react";

import ContentBox from "@/src/components/ContentBox";
import Layout from "@/src/components/Layout";
import SectionBox from "@/src/components/SectionBox";
import SectionLimit from "@/src/components/SectionLimit";

import useStyles from "./useStyles";

/* A React component that renders the terms and conditions page. */
const TermsAndConditions = () => {
  const { t } = useTranslation("terms-and-conditions");
  const styles = useStyles();
  const s1Ref = useRef<HTMLAnchorElement>(null);
  const s2Ref = useRef<HTMLAnchorElement>(null);
  const s3Ref = useRef<HTMLAnchorElement>(null);
  const theme = useTheme();
  const s4Ref = useRef<HTMLAnchorElement>(null);

  const scrollToRef = useCallback(
    (ref: RefObject<HTMLAnchorElement>) => {
      window.scrollTo({
        behavior: "smooth",
        top:
          (ref.current?.offsetTop ?? 0) -
          parseInt(theme.spacing(12) || "0", 10),
      });
    },
    [theme],
  );

  return (
    <Layout css={styles.root}>
      <Head>
        <title>{t("termsAndConditions")}</title>
      </Head>
      <SectionBox main>
        <SectionLimit>
          <Typography className="termsandconditions__title" variant="h2">
            {t("termsAndConditions")}
          </Typography>
          <Typography className="termsandconditions__intro">
            {t("intro")}
          </Typography>
          <Typography className="termsandconditions__intro">
            Last updated: 21 July 2022
          </Typography>
          <ContentBox className="termsandconditions__content">
            <Trans
              components={{
                a1: <a onClick={() => scrollToRef(s1Ref)} />,
                a2: <a onClick={() => scrollToRef(s2Ref)} />,
                a3: <a onClick={() => scrollToRef(s3Ref)} />,
                a4: <a onClick={() => scrollToRef(s4Ref)} />,
                b: <strong />,
                br: <br />,
                h2: <Typography variant="h2" />,
                li: <Typography component="li" />,
                ol: <ol />,
                p: <Typography />,
                s1: <Typography ref={s1Ref} variant="h6" />,
                s2: <Typography ref={s2Ref} variant="h6" />,
                s3: <Typography ref={s3Ref} variant="h6" />,
                s4: <Typography ref={s4Ref} variant="h6" />,
              }}
              i18nKey="terms-and-conditions:content"
            />
          </ContentBox>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default TermsAndConditions;
