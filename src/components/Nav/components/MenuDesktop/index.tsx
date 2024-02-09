/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from "@mui/material/Box";
import useTranslation from "next-translate/useTranslation";
import Image from "next/legacy/image";
import Link from "next/link";
import type { FC } from "react";

import bigDipperRedUrl from "@/src/assets/bigDipperRed.svg?url";
import { HOME } from "@/src/utils/links";

import HamburgerIcon from "../HamburgerIcon";
import HorizontalMenubar from "../HorizontalMenubar";
import MenuItems from "../MenuItemsDesktop";
import type { MenuDesktopProps } from "./types";
import useStyles from "./useStyles";

const MenuDesktop: FC<MenuDesktopProps> = ({
  isMenu,
  toggleHamburgerMenu,
  ...props
}) => {
  const styles = useStyles();
  const { t } = useTranslation("common");

  return (
    <HorizontalMenubar {...props} css={styles.root}>
      <Link href={HOME}>
        <span css={styles.dbLogoSvg}>
          <Image
            alt={t("bigDipper")}
            height={36.11}
            src={bigDipperRedUrl}
            width={175.81}
          />
        </span>
      </Link>
      <HamburgerIcon
        style={{ display: isMenu ? "none" : undefined }}
        toggleHamburgerMenu={toggleHamburgerMenu}
      />
      <Box className="menudesktop__menu-container">
        <MenuItems />
      </Box>
    </HorizontalMenubar>
  );
};

export default MenuDesktop;
