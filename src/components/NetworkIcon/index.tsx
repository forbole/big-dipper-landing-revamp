/* eslint-disable @next/next/no-img-element */
import AgoricLight from '@/src/assets/logos/agoric-light.svg?url';
import AkashLight from '@/src/assets/logos/akash-light.svg?url';
import AssetMantleLight from '@/src/assets/logos/assetMantle-light.svg?url';
import BandProtocolLight from '@/src/assets/logos/bandProtocol-light.svg?url';
import BitsongLight from '@/src/assets/logos/bitsong-light.svg?url';
import CheqdLight from '@/src/assets/logos/cheqd-light.svg?url';
import ComdexDark from '@/src/assets/logos/comdex-dark.svg?url';
import ComdexLight from '@/src/assets/logos/comdex-light.svg?url';
import CosmosHubLight from '@/src/assets/logos/cosmosHub-light.svg?url';
import CrescentLight from '@/src/assets/logos/crescent-light.svg?url';
import CryptoorgChainLight from '@/src/assets/logos/cryptoorgChain-light.svg?url';
import DesmosLight from '@/src/assets/logos/desmos-light.svg?url';
import MultiversXDark from '@/src/assets/logos/multiversx-dark.svg?url';
import MultiversXLight from '@/src/assets/logos/multiversx-light.svg?url';
import EMoneyDark from '@/src/assets/logos/eMoney-dark.svg?url';
import EMoneyLight from '@/src/assets/logos/eMoney-light.svg?url';
import EvmosLight from '@/src/assets/logos/evmos-light.svg?url';
import FetchAILight from '@/src/assets/logos/fetchAI-light.svg?url';
import FlowLight from '@/src/assets/logos/flow-light.svg?url';
import KavaLight from '@/src/assets/logos/kava-light.svg?url';
import LikeCoinLight from '@/src/assets/logos/likeCoin-light.svg?url';
import OsmosisDark from '@/src/assets/logos/osmosis-dark.svg?url';
import OsmosisLight from '@/src/assets/logos/osmosis-light.svg?url';
import ProvenanceLight from '@/src/assets/logos/provenance-light.svg?url';
import RegenNetworkLight from '@/src/assets/logos/regenNetwork-light.svg?url';
import RizonLight from '@/src/assets/logos/rizon-light.svg?url';
import SifchainLight from '@/src/assets/logos/sifchain-light.svg?url';
import SolanaDark from '@/src/assets/logos/solana-dark.svg?url';
import SolanaLight from '@/src/assets/logos/solana-light.svg?url';
import ShentuLight from '@/src/assets/logos/shentu-light.svg?url';
import PersistenceLight from '@/src/assets/logos/persistence-light.svg?url';
import PersistenceDark from '@/src/assets/logos/persistence-dark.svg?url';
import StrideLight from '@/src/assets/logos/stride-light.svg?url';
import NymLight from '@/src/assets/logos/nym-light.svg?url';
import NymDark from '@/src/assets/logos/nym-dark.svg?url';
import NomicDark from '@/src/assets/logos/nomic-dark.svg?url';
import QuicksilverLight from '@/src/assets/logos/quicksilver-light.svg?url';
import QuicksilverDark from '@/src/assets/logos/quicksilver-dark.svg?url';
import BlockXDark from '@/src/assets/logos/blockx-dark.svg?url';
import BlockXLight from '@/src/assets/logos/blockx-dark.svg?url';
import LavaBoth from '@/src/assets/logos/lava-both.svg?url';
import { FC } from 'react';
import useStyles from './useStyles';

const Light = {
  Agoric: AgoricLight,
  Akash: AkashLight,
  AssetMantle: AssetMantleLight,
  'Band Protocol': BandProtocolLight,
  Bitsong: BitsongLight,
  Cheqd: CheqdLight,
  Comdex: ComdexLight,
  'Cosmos Hub': CosmosHubLight,
  Crescent: CrescentLight,
  'Crypto.org Chain': CryptoorgChainLight,
  Desmos: DesmosLight,
  'e-Money': EMoneyLight,
  Evmos: EvmosLight,
  'Fetch.AI': FetchAILight,
  Flow: FlowLight,
  Kava: KavaLight,
  LikeCoin: LikeCoinLight,
  Osmosis: OsmosisLight,
  Provenance: ProvenanceLight,
  'Regen Network': RegenNetworkLight,
  Rizon: RizonLight,
  Sifchain: SifchainLight,
  Solana: SolanaLight,
  Shentu: ShentuLight,
  Persistence: PersistenceLight,
  Stride: StrideLight,
  NYM: NymLight,
  Nomic: NomicDark,
  Quicksilver: QuicksilverLight,
  BlockX: BlockXLight,
  MultiversX: MultiversXLight,
  Lava: LavaBoth,
};

const Dark = {
  Comdex: ComdexDark,
  EMoney: EMoneyDark,
  Osmosis: OsmosisDark,
  Solana: SolanaDark,
  Persistence: PersistenceDark,
  NYM: NymDark,
  Nomic: NomicDark,
  Quicksilver: QuicksilverDark,
  BlockX: BlockXDark,
  MultiversX: MultiversXDark,
  Lava: LavaBoth,
};

type Props = {
  networkName: string;
} & JSX.IntrinsicElements['img'];

const NetworkIcon: FC<Props> = ({ networkName, src: _, ...props }) => {
  const styles = useStyles();
  const lightUrl = Light[networkName as keyof typeof Light];
  const darkUrl = Dark[networkName as keyof typeof Dark];
  if (lightUrl && darkUrl) {
    return (
      <>
        <img src={lightUrl} css={styles.light} alt="" {...props} />
        <img src={darkUrl} css={styles.dark} alt="" {...props} />
      </>
    );
  }
  if (lightUrl) {
    return <img src={lightUrl} alt="" {...props} />;
  }
  if (darkUrl) {
    return <img src={darkUrl} alt="" {...props} />;
  }
  return null;
};

export default NetworkIcon;
