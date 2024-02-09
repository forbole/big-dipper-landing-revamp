import Typography from "@mui/material/Typography";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import ContentBox from "@/src/components/ContentBox";
import Layout from "@/src/components/Layout";
import SectionBox from "@/src/components/SectionBox";
import SectionLimit from "@/src/components/SectionLimit";
import useStyles from "./useStyles";
import { RefObject, useCallback, useRef } from "react";
import Trans from "next-translate/Trans";
import { useTheme } from "@mui/material";

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
        top:
          (ref.current?.offsetTop ?? 0) -
          parseInt(theme.spacing(12) || "0", 10),
        behavior: "smooth",
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
              i18nKey="terms-and-conditions:content"
              components={{
                b: <strong />,
                br: <br />,
                p: <Typography />,
                h2: <Typography variant="h2" />,
                ol: <ol />,
                li: <Typography component="li" />,
                s1: <Typography variant="h6" ref={s1Ref} />,
                s2: <Typography variant="h6" ref={s2Ref} />,
                s3: <Typography variant="h6" ref={s3Ref} />,
                s4: <Typography variant="h6" ref={s4Ref} />,
                a1: <a onClick={() => scrollToRef(s1Ref)} />,
                a2: <a onClick={() => scrollToRef(s2Ref)} />,
                a3: <a onClick={() => scrollToRef(s3Ref)} />,
                a4: <a onClick={() => scrollToRef(s4Ref)} />,
              }}
            />
          </ContentBox>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default TermsAndConditions;
