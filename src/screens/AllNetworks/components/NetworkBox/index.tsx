import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import classnames from "classnames";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useCallback, useRef } from "react";

import NetworkIcon from "@/src/components/NetworkIcon";
import getChainIdFromNetwork from "@/src/utils/getChainIdFromNetwork";

import NetworkMenuLink from "../NetworkMenuLink";
import type { NetworkBoxProps } from "./types";
import useStyles from "./useStyles";

/* A React component that renders a network box. */
const NetworkBox: FC<NetworkBoxProps> = ({ isOpened, network, onOpen }) => {
  const handleClick = useCallback(
    () => onOpen(network.name),
    [network.name, onOpen],
  );

  const chainId = getChainIdFromNetwork(network);
  const { links, name } = network;
  const styles = useStyles();
  const ref = useRef(null);

  return (
    <motion.div
      className={classnames({ networkbox__active: isOpened })}
      css={styles.root}
      initial="initial"
      ref={ref}
      transition={{ duration: 0.3 }}
      variants={{
        appear: { opacity: 1, scale: 1 },
        initial: { opacity: 0, scale: 0.8 },
      }}
      whileInView="appear"
    >
      {isOpened && (
        <Box className="networkbox__popover">
          <MenuList>
            {links.map((link) => (
              <NetworkMenuLink key={link.chain_id} link={link} />
            ))}
          </MenuList>
        </Box>
      )}
      <Box className="networkbox__dropdown-btn" onClick={handleClick}>
        <Box className="image">
          <Badge badgeContent={links?.length} color="success" />
          <NetworkIcon height="48" networkName={name} width="48" />
        </Box>
        <Box>
          <Typography variant="h4">{name}</Typography>
          <Box className="networkbox__subtitlecontainer">
            <Typography variant="body2">{chainId}</Typography>
          </Box>
        </Box>
        {!!links?.[0] && (
          <>
            {isOpened && <KeyboardArrowUpIcon fontSize="large" />}
            {!isOpened && <KeyboardArrowDownIcon fontSize="large" />}
          </>
        )}
      </Box>
    </motion.div>
  );
};

export default NetworkBox;
