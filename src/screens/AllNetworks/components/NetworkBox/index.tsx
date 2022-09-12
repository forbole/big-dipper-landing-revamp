import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ComponentProps, FC, forwardRef, useCallback } from 'react';
import getChainIdFromNetwork from '~src/utils/getChainIdFromNetwork';
import NetworkMenuLink from '../NetworkMenuLink';
import type { NetworkBoxProps } from './types';
import useStyles from './useStyles';

const variants: Variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8 },
};

/* A React component that renders a network box. */
const NetworkBox: FC<NetworkBoxProps> = forwardRef(function _(
  { network, isOpened, onOpen },
  ref: ComponentProps<typeof motion.div>['ref']
) {
  const handleClick = useCallback(
    () => onOpen(network.name),
    [network, onOpen]
  );
  const chainId = getChainIdFromNetwork(network);
  const { name, logo, links } = network;
  const styles = useStyles();

  return (
    <motion.div
      className={classnames({ networkbox__active: isOpened })}
      ref={ref}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      css={styles.root}
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
      <Box onClick={handleClick} className="networkbox__dropdown-btn">
        <Box className="image">
          <Image alt={name} src={logo} width="30" height="30" unoptimized />
        </Box>
        <Box>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="body2">
            <Badge color="success" badgeContent={links?.length}>
              {chainId}
            </Badge>
          </Typography>
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
});

export default NetworkBox;
