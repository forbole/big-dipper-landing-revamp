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
import ElrondDark from '@/src/assets/logos/elrond-dark.svg?url';
import ElrondLight from '@/src/assets/logos/elrond-light.svg?url';
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
  Elrond: ElrondLight,
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
};

const Dark = {
  Comdex: ComdexDark,
  EMoney: EMoneyDark,
  Elrond: ElrondDark,
  Osmosis: OsmosisDark,
  Solana: SolanaDark,
};

type Props = {
  networkName: string;
} & JSX.IntrinsicElements['img'];

const NetworkIcon: FC<Props> = ({ networkName, src: _, ...props }) => {
  const styles = useStyles();
  const LightIcon = Light[networkName as keyof typeof Light];
  const DarkIcon = Dark[networkName as keyof typeof Dark];
  if (LightIcon && DarkIcon) {
    return (
      <>
        <img src={LightIcon} css={styles.light} alt="" {...props} />
        <img src={DarkIcon} css={styles.dark} alt="" {...props} />
      </>
    );
  }
  if (LightIcon) {
    return (
      <img src={LightIcon} alt="" {...props} />
    );
  }
  if (DarkIcon) {
    return (
      <img src={DarkIcon} alt="" {...props} />
    );
  }
  return null;
};

export default NetworkIcon;
