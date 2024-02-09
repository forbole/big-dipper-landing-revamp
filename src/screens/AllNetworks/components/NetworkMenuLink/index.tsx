import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import type { FC } from "react";

import type { NetworkMenuLinkProps } from "../NetworkBox/types";
import useStyles from "./useStyles";

/**
 * It renders a link to a network
 * @param  - `link` - the network link object
 * @returns A link to the network menu link
 */
const NetworkMenuLink: FC<NetworkMenuLinkProps> = ({ link }) => {
  const { chain_id: chainId, name, url } = link;
  const styles = useStyles();

  return (
    <Link href={url} passHref>
      <ListItemButton css={styles.root}>
        <ListItemText>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1">{chainId}</Typography>
        </ListItemText>
        <ListItemIcon>
          <KeyboardArrowRightIcon fontSize="large" />
        </ListItemIcon>
      </ListItemButton>
    </Link>
  );
};

export default NetworkMenuLink;
