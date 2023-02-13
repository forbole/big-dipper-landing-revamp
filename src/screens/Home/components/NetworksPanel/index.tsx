import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LayoutGroup } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import {
  FC,
  startTransition,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import basePath from '@/src/utils/basePath';
import { NetworkSummary } from '@/src/utils/loadNetworkSummary';
import NetworkBox from '../NetworkBox';
import SearchBox from '../SearchBox';
import { NetworksPanelProps } from './types';
import useStyles from './useStyles';

function initialNetworkSummaries(networkList: Network[]): {
  [name: string]: NetworkSummary | undefined;
} {
  return networkList.reduce(
    (acc, { name }) => ({ ...acc, [name]: undefined }),
    {}
  );
}

const NetworksPanel: FC<NetworksPanelProps> = ({ networkList }) => {
  const sortedNetworks = useMemo(
    () =>
      (networkList ?? [])
        .filter((network) =>
          network?.links?.some((l) => /^mainnet$/i.test(l.name))
        )
        .sort((a, b) => a.name.localeCompare(b.name)),
    [networkList]
  );

  const { t } = useTranslation('common');

  const [showMobilePopover, setShowMobilePopover] = useState('');
  const [networkSummaries, setNetworkSummaries] = useState(() =>
    initialNetworkSummaries(networkList)
  );
  const called = useRef(false);
  useEffect(() => {
    if (called.current) return;
    called.current = true;
    startTransition(() => {
      fetch(basePath('/api/networks'))
        .then((res) => res.json())
        .then((d) =>
          setNetworkSummaries((prev) => {
            return Object.keys(prev).reduce(
              (map, name) => ({ ...map, [name]: d[name] ?? null }),
              {}
            );
          })
        )
        .catch(() =>
          setNetworkSummaries((prev) => {
            return Object.keys(prev).reduce(
              (map, name) => ({ ...map, [name]: null }),
              {}
            );
          })
        );
    });
  }, []);
  const styles = useStyles();
  return (
    <Box css={styles.root}>
      <Box className="home__content">
        <Box className="home__search-bar">
          <Typography variant="h2">{t('supportedNetworks')}</Typography>
          <SearchBox networks={sortedNetworks} />
        </Box>
      </Box>
      <Box className="home__networks">
        <LayoutGroup>
          {sortedNetworks.map((network) => (
            <NetworkBox
              key={network.name}
              network={network}
              networkSummary={networkSummaries[network.name]}
              showMobilePopover={showMobilePopover}
              setShowMobilePopover={setShowMobilePopover}
            />
          ))}
        </LayoutGroup>
      </Box>
    </Box>
  );
};

export default NetworksPanel;
