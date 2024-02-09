/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from "@mui/material/Box";
import { FC } from "react";
import bigDipperRedUrl from "@/src/assets/bigDipperRed.svg?url";
import { HOME } from "@/src/utils/links";
import Image from "next/legacy/image";
import HamburgerIcon from "../HamburgerIcon";
import HorizontalMenubar from "../HorizontalMenubar";
import MenuItems from "../MenuItemsDesktop";
import { MenuDesktopProps } from "./types";
import useStyles from "./useStyles";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

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
            src={bigDipperRedUrl}
            width={175.81}
            height={36.11}
            alt={t("bigDipper")}
          />
        </span>
      </Link>
      <HamburgerIcon
        toggleHamburgerMenu={toggleHamburgerMenu}
        style={{ display: isMenu ? "none" : undefined }}
      />
      <Box className="menudesktop__menu-container">
        <MenuItems />
      </Box>
    </HorizontalMenubar>
  );
};

export default MenuDesktop;
