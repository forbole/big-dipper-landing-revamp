import Typography from "@mui/material/Typography";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

import { SectionBox } from "@/src/components";
import Layout from "@/src/components/Layout";
import SectionLimit from "@/src/components/SectionLimit";

import Content from "./components/Content";
import MenuDesktop from "./components/MenuDesktop";
import MenuMobile from "./components/MenuMobile";
import { useFAQ } from "./hooks";
import useStyles from "./useStyles";
import { getContent, getMenuItems } from "./utils";

/* A React component that renders the FAQ page. */
const FAQ = () => {
  const { t } = useTranslation("faq");
  const { handleSelected, state } = useFAQ();
  const menuItems = getMenuItems(t);
  const content = getContent(state.selected, t);
  const styles = useStyles();

  return (
    <Layout>
      <Head>
        <title>{t("faq")}</title>
      </Head>
      <SectionBox css={styles.root} main>
        <SectionLimit>
          <div className="faq__header-wrapper">
            <Typography className="faq__title" variant="h2">
              {t("faq")}
            </Typography>
            <MenuMobile
              className="faq_menu-mobile"
              handleChange={handleSelected}
              items={menuItems}
              selected={state.selected}
            />
          </div>
          <div className="faq__content-wrapper">
            <MenuDesktop
              className="faq__menu-desktop"
              handleChange={handleSelected}
              items={menuItems}
              selected={state.selected}
            />
            {/* eslint-disable-next-line */}
            <Content className="faq__content" content={content as any} />
          </div>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default FAQ;
