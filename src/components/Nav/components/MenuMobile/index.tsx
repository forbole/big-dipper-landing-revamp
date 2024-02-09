/* eslint-disable react-hooks/exhaustive-deps */
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import useTranslation from "next-translate/useTranslation";
import Image from "next/legacy/image";
import Link from "next/link";
import type { FC } from "react";
import { useCallback } from "react";

import bigDipperRedUrl from "@/src/assets/bigDipperRed.svg?url";
import { HOME } from "@/src/utils/links";

import HamburgerIcon from "../HamburgerIcon";
import HorizontalMenubar from "../HorizontalMenubar";
import MenuItems from "../MenuItemsMobile";
import type { MenuMobileProps } from "./types";
import useStyles from "./useStyles";

const MenuMobile: FC<MenuMobileProps> = ({
  isMenu,
  toggleHamburgerMenu,
  ...props
}) => {
  const styles = useStyles();
  const handleClose = useCallback(() => toggleHamburgerMenu(), []);
  const { t } = useTranslation("common");

  return (
    <Modal css={styles.root} onClose={handleClose} open={isMenu}>
      <>
        <HorizontalMenubar {...props}>
          <Link href={HOME}>
            <span css={styles.dbLogoSvg}>
              <Image
                alt={t("bigDipper")}
                height={44}
                src={bigDipperRedUrl}
                width={214}
              />
            </span>
          </Link>
          <HamburgerIcon toggleHamburgerMenu={toggleHamburgerMenu} />
        </HorizontalMenubar>
        <Paper className="menumobile__paper">
          <MenuItems />
        </Paper>
      </>
    </Modal>
  );
};

export default MenuMobile;
