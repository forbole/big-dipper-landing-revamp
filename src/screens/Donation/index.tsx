import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/legacy/image";
import type { FC } from "react";
import { useCallback, useState } from "react";

import copyUrl from "@/src/assets/copy.svg?url";
import { SectionLimit } from "@/src/components";
import ContentBox from "@/src/components/ContentBox";
import Layout from "@/src/components/Layout";
import SectionBox from "@/src/components/SectionBox";

import { useDonation } from "./hooks";
import useStyles from "./useStyles";
import { addresses } from "./utils";

const Content: FC<{ x: (typeof addresses)[number] }> = ({ x }) => {
  const { t } = useTranslation("donation");
  const { handleCopyToClipboard } = useDonation();
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    handleCopyToClipboard(x.address);
    setCopied(true);
  }, [handleCopyToClipboard, x.address]);

  return (
    <ContentBox key={x.address}>
      {!!x.imgSrc && (
        <Image
          alt={x.key}
          className="donation__address-logo"
          height={60}
          src={x.imgSrc}
          width={60}
        />
      )}
      <Typography className="donation__address-key" variant="h4">
        {t(x.key)}
      </Typography>
      <Typography className="donation__address-address">{x.address}</Typography>
      <Button
        className="donation__address-button"
        onClick={handleCopy}
        variant="contained"
      >
        <Image
          alt={t("copy")}
          className="donation__address-button-copy"
          height="15"
          src={copyUrl}
          width="15"
        />
        {copied ? t("copied") : t("copy")}
      </Button>
    </ContentBox>
  );
};

/* A React component that renders the Donation page. */
const Donation = () => {
  const { t } = useTranslation("donation");
  const styles = useStyles();

  return (
    <Layout>
      <Head>
        <title>{t("donation")}</title>
      </Head>
      <SectionBox css={styles.root} main>
        <SectionLimit>
          <Typography className="donation__title" variant="h2">
            {t("donation")}
          </Typography>
          <Typography className="donation__description">
            {t("description1")}
          </Typography>
          <Typography className="donation__description">
            {t("description2")}
          </Typography>
          <div className="donation__address-container">
            {addresses.map((x) => (
              <Content key={x.address} x={x} />
            ))}
          </div>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Donation;
