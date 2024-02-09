/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import classnames from "classnames";
import { LayoutGroup } from "framer-motion";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import { equals } from "ramda";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { SectionBox } from "@/src/components";
import Layout from "@/src/components/Layout";
import SectionLimit from "@/src/components/SectionLimit";
import allNetworksTab from "@/src/utils/allNetworksTab";
import NetworkBox from "./components/NetworkBox";
import SearchBox from "./components/SearchBox";
import type { AllNetworksProps } from "./types";
import useStyles from "./useStyles";
import Link from "next/link";

function getTabIndexFromPath(path: string) {
  if (/\/all-networks#tab=Mainnet/i.test(path)) return allNetworksTab.Mainnet;
  if (/\/all-networks#tab=Testnet/i.test(path)) return allNetworksTab.Testnet;
  if (/\/all-networks#tab=Devnet/i.test(path)) return allNetworksTab.Devnet;
  if (/\/all-networks#tab=Retired/i.test(path)) return allNetworksTab.Retired;
  return allNetworksTab.All;
}

function useHooks(networkList: Network[]) {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const [opened, setOpened] = useState("");
  const handleOpen = useCallback((name: string) => {
    setOpened((prev) => (equals(prev, name) ? "" : name));
  }, []);
  const handleHashChange = useCallback((url: string) => {
    const newTabIndex = getTabIndexFromPath(url);
    setTabIndex((prev) => (prev === newTabIndex ? prev : newTabIndex));
  }, []);
  useEffect(() => {
    handleHashChange(router.asPath);
    router.events.on("hashChangeStart", handleHashChange);
    return () => router.events.off("hashChangeStart", handleHashChange);
  }, [router.asPath, router.events]);
  const sortedNetworks = useMemo(
    () => networkList.sort((a, b) => a.name.localeCompare(b.name)),
    [networkList],
  );
  const filteredNetworks = useMemo(() => {
    switch (tabIndex) {
      case allNetworksTab.Mainnet:
        return sortedNetworks.filter((n) =>
          n.links?.some((l) => /^mainnet$/i.test(l.name)),
        );
      case allNetworksTab.Testnet:
        return sortedNetworks.filter((n) =>
          n.links?.some((l) => /^testnet$/i.test(l.name)),
        );
      case allNetworksTab.Devnet:
        return sortedNetworks.filter((n) =>
          n.links?.some((l) => /^devnet$/i.test(l.name)),
        );
      case allNetworksTab.Retired:
        return sortedNetworks.filter((n) =>
          n.links?.some((l) => /^retired$/i.test(l.name)),
        );
      default:
        return sortedNetworks;
    }
  }, [sortedNetworks, tabIndex]);
  const { t } = useTranslation("all-networks");
  return {
    tabIndex,
    opened,
    handleOpen,
    filteredNetworks,
    t,
  };
}

const AllNetworks: FC<AllNetworksProps> = ({ networkList }) => {
  const { tabIndex, opened, handleOpen, filteredNetworks, t } =
    useHooks(networkList);
  const styles = useStyles();
  return (
    <Layout>
      <Head>
        <title>{t("allNetworks")}</title>
      </Head>
      <SectionBox css={styles.root}>
        <SectionLimit>
          <Box className="allnetworks__search">
            <Typography variant="h2">{t("allNetworks")}</Typography>
            <Box className="allnetworks__header">
              <Typography>
                <Trans
                  i18nKey="all-networks:allNetworksDescription"
                  components={{
                    a: <Link href="https://www.forbole.com/contact" />,
                  }}
                />
              </Typography>
              <Box className="allnetworks__tabs">
                <Link
                  scroll={false}
                  href="/all-networks"
                  className={classnames(
                    {
                      allnetworks__active: tabIndex === allNetworksTab.All,
                    },
                    "allnetworks__tab",
                  )}
                >
                  All
                </Link>
                <Link
                  scroll={false}
                  href="/all-networks#tab=Mainnet"
                  className={classnames(
                    {
                      allnetworks__active: tabIndex === allNetworksTab.Mainnet,
                    },
                    "allnetworks__tab",
                  )}
                >
                  Mainnet
                </Link>
                <Link
                  scroll={false}
                  href="/all-networks#tab=Testnet"
                  className={classnames(
                    {
                      allnetworks__active: tabIndex === allNetworksTab.Testnet,
                    },
                    "allnetworks__tab",
                  )}
                >
                  Testnet
                </Link>
                <Link
                  scroll={false}
                  href="/all-networks#tab=Devnet"
                  className={classnames(
                    {
                      allnetworks__active: tabIndex === allNetworksTab.Devnet,
                    },
                    "allnetworks__tab",
                  )}
                >
                  Devnet
                </Link>
                <Link
                  scroll={false}
                  href="/all-networks#tab=Retired"
                  className={classnames(
                    {
                      allnetworks__active: tabIndex === allNetworksTab.Retired,
                    },
                    "allnetworks__tab",
                  )}
                >
                  Retired
                </Link>
              </Box>
            </Box>
            <SearchBox networks={filteredNetworks} />
          </Box>
          <Box className="allnetworks__networks">
            <LayoutGroup>
              {filteredNetworks.map((network) => (
                <NetworkBox
                  key={network.name}
                  network={network}
                  isOpened={network.name === opened}
                  onOpen={handleOpen}
                />
              ))}
            </LayoutGroup>
            {!filteredNetworks.length && (
              <Box className="allnetworks__empty">
                {t("common:noResultsFound")}
              </Box>
            )}
          </Box>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default AllNetworks;
