/* eslint-disable jsx-a11y/anchor-is-valid */
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { FC, MouseEventHandler, useCallback, useRef } from 'react';
import NetworkIcon from '@/src/components/NetworkIcon';
import getUrlFromNetwork from '@/src/utils/getUrlFromNetwork';
import type { NetworkBoxProps } from './types';
import useStyles from './useStyles';

/* A React component that renders a network box. */
const NetworkBox: FC<NetworkBoxProps> = ({ network, networkSummary, showMobilePopover, setShowMobilePopover }) => {
  const url = getUrlFromNetwork(network);
  const { name } = network;
  const { t } = useTranslation('common');

  /* Using framer-motion to animate the network box. */
  const ref = useRef(null);

  const handleMobileAnchorClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    () => setShowMobilePopover(network.name),
    [network.name, setShowMobilePopover]
  );
  const handleMobilPopoverClick: MouseEventHandler<Element> = useCallback(
    (event) => {
      event.stopPropagation();
      setShowMobilePopover('');
    },
    [setShowMobilePopover]
  );
  const handleExploreClick: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      event.stopPropagation();
      if (url) window.open(url, '_top');
    },
    [url]
  );

  /* A variable that is used to render the popover. */
  const popover = (
    <Box className="networkbox__popover">
      <CloseIcon fontSize="small" className="networkbox__close-btn" onClickCapture={handleMobilPopoverClick} />
      <Box onClickCapture={handleMobilPopoverClick}>
        <Box className="image">
          <NetworkIcon networkName={name} width="48" height="48" />
        </Box>
        <Typography variant="h3">{name}</Typography>
      </Box>
      {networkSummary === undefined && <LinearProgress color="secondary" />}
      {!!networkSummary && (
        <Box onClickCapture={handleMobilPopoverClick}>
          {!!networkSummary.token_price?.[0] && (
            <Box>
              <Typography variant="h6">{networkSummary.token_price[0].unit_name?.toUpperCase()}</Typography>
              <Typography>{networkSummary.token_price[0].price}</Typography>
            </Box>
          )}
          {!!networkSummary.block?.[0]?.height && (
            <Box>
              <Typography variant="h6">Blocks</Typography>
              <Typography>{networkSummary.block[0].height}</Typography>
            </Box>
          )}
          {!!networkSummary.genesis?.[0].chain_id && (
            <Box>
              <Typography variant="h6">Chain ID</Typography>
              <Typography>{networkSummary.genesis?.[0].chain_id}</Typography>
            </Box>
          )}
        </Box>
      )}
      <Button
        variant="contained"
        color="secondary"
        className="networkbox__explore-btn"
        endIcon={<ChevronRightIcon />}
        onClickCapture={handleExploreClick}
      >
        {t('explore')}
      </Button>
    </Box>
  );
  const styles = useStyles();

  /* Returning a React component. */
  return (
    <motion.div
      ref={ref}
      css={styles.root}
      variants={{
        initial: { opacity: 0, scale: 0.8 },
        appear: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.3 }}
      initial="initial"
      whileInView="appear"
    >
      <Box
        className={classnames(
          {
            networkbox__active: showMobilePopover === network.name,
          },
          'networkbox__mobile-popover-contaier'
        )}
      >
        {popover}
      </Box>
      <Box className="networkbox__desktop-anchor" onClick={handleExploreClick}>
        {popover}
        <Box className="image">
          <NetworkIcon networkName={name} width="48" height="48" />
        </Box>
        <Typography variant="h4">{name}</Typography>
      </Box>
      <Button variant="text" className="networkbox__mobile-anchor" onClick={handleMobileAnchorClick}>
        <Box className="image">
          <NetworkIcon networkName={name} width="48" height="48" />
        </Box>
        <Typography variant="h4">{name}</Typography>
      </Button>
    </motion.div>
  );
};

export default NetworkBox;
