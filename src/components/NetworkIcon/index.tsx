/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";

import AgoricLight from "@/src/assets/logos/agoric-light.svg?url";
import AkashLight from "@/src/assets/logos/akash-light.svg?url";
import ArchwayBoth from "@/src/assets/logos/archway-both.svg?url";
import AssetMantleLight from "@/src/assets/logos/assetMantle-light.svg?url";
import BandProtocolLight from "@/src/assets/logos/bandProtocol-light.svg?url";
import BitsongLight from "@/src/assets/logos/bitsong-light.svg?url";
import BlockXDark from "@/src/assets/logos/blockx-dark.svg?url";
import CelestiaBoth from "@/src/assets/logos/celestia-both.svg?url";
import CheqdLight from "@/src/assets/logos/cheqd.svg?url";
import ComdexDark from "@/src/assets/logos/comdex-dark.svg?url";
import ComdexLight from "@/src/assets/logos/comdex-light.svg?url";
import CoreumBoth from "@/src/assets/logos/coreum-light.svg?url";
import CosmosHubLight from "@/src/assets/logos/cosmosHub-light.svg?url";
import CrescentLight from "@/src/assets/logos/crescent-light.svg?url";
import CryptoorgChainLight from "@/src/assets/logos/cryptoorgChain-light.svg?url";
import DesmosLight from "@/src/assets/logos/desmos-light.svg?url";
import EMoneyDark from "@/src/assets/logos/eMoney-dark.svg?url";
import EMoneyLight from "@/src/assets/logos/eMoney-light.svg?url";
import EvmosLight from "@/src/assets/logos/evmos-light.svg?url";
import FetchAILight from "@/src/assets/logos/fetchAI-light.svg?url";
import FlowLight from "@/src/assets/logos/flow-light.svg?url";
import GitopiaBoth from "@/src/assets/logos/gitopia-both.svg?url";
import HumansaiBoth from "@/src/assets/logos/humansai-both.svg?url";
import JackalBoth from "@/src/assets/logos/jackal-both.svg?url";
import KavaLight from "@/src/assets/logos/kava-light.svg?url";
import KyveBoth from "@/src/assets/logos/kyve-both.svg?url";
import LavaBoth from "@/src/assets/logos/lava-both.svg?url";
import LikeCoinLight from "@/src/assets/logos/likeCoin-light.svg?url";
import MarsBoth from "@/src/assets/logos/mars-both.svg?url";
import MultiversXDark from "@/src/assets/logos/multiversx-dark.svg?url";
import MultiversXLight from "@/src/assets/logos/multiversx-light.svg?url";
import NeutronBoth from "@/src/assets/logos/neutron-both.svg?url";
import NomicDark from "@/src/assets/logos/nomic-dark.svg?url";
import NymDark from "@/src/assets/logos/nym-dark.svg?url";
import NymLight from "@/src/assets/logos/nym-light.svg?url";
import OsmosisDark from "@/src/assets/logos/osmosis-dark.svg?url";
import OsmosisLight from "@/src/assets/logos/osmosis-light.svg?url";
import PersistenceDark from "@/src/assets/logos/persistence-dark.svg?url";
import PersistenceLight from "@/src/assets/logos/persistence-light.svg?url";
import ProvenanceLight from "@/src/assets/logos/provenance-light.svg?url";
import QuasarBoth from "@/src/assets/logos/quasar.svg?url";
import QuicksilverDark from "@/src/assets/logos/quicksilver-dark.svg?url";
import QuicksilverLight from "@/src/assets/logos/quicksilver-light.svg?url";
import RegenNetworkLight from "@/src/assets/logos/regenNetwork-light.svg?url";
import RizonLight from "@/src/assets/logos/rizon-light.svg?url";
import SifchainLight from "@/src/assets/logos/sifchain-light.svg?url";
import SolanaDark from "@/src/assets/logos/solana-dark.svg?url";
import SolanaLight from "@/src/assets/logos/solana-light.svg?url";
import StrideLight from "@/src/assets/logos/stride-light.svg?url";
import WormholeBoth from "@/src/assets/logos/wormhole-light.svg?url";

import useStyles from "./useStyles";

const Light = {
  "Agoric": AgoricLight,
  "Akash": AkashLight,
  "Archway": ArchwayBoth,
  "AssetMantle": AssetMantleLight,
  "Band Protocol": BandProtocolLight,
  "Bitsong": BitsongLight,
  "BlockX": BlockXDark,
  "Celestia": CelestiaBoth,
  "Cheqd": CheqdLight,
  "Comdex": ComdexLight,
  "Coreum": CoreumBoth,
  "Cosmos Hub": CosmosHubLight,
  "Crescent": CrescentLight,
  "Crypto.org Chain": CryptoorgChainLight,
  "Desmos": DesmosLight,
  "e-Money": EMoneyLight,
  "Evmos": EvmosLight,
  "Fetch.AI": FetchAILight,
  "Flow": FlowLight,
  "Gitopia": GitopiaBoth,
  "Humans.ai": HumansaiBoth,
  "Jackal": JackalBoth,
  "Kava": KavaLight,
  "KYVE": KyveBoth,
  "Lava": LavaBoth,
  "LikeCoin": LikeCoinLight,
  "Mars": MarsBoth,
  "MultiversX": MultiversXLight,
  "Neutron": NeutronBoth,
  "Nomic": NomicDark,
  "NYM": NymLight,
  "Osmosis": OsmosisLight,
  "Persistence": PersistenceLight,
  "Provenance": ProvenanceLight,
  "Quasar": QuasarBoth,
  "Quicksilver": QuicksilverLight,
  "Regen Network": RegenNetworkLight,
  "Rizon": RizonLight,
  "Sifchain": SifchainLight,
  "Solana": SolanaLight,
  "Stride": StrideLight,
  "Wormhole": WormholeBoth,
};

const Dark = {
  "Archway": ArchwayBoth,
  "BlockX": BlockXDark,
  "Celestia": CelestiaBoth,
  "Comdex": ComdexDark,
  "Coreum": CoreumBoth,
  "EMoney": EMoneyDark,
  "Gitopia": GitopiaBoth,
  "Humans.ai": HumansaiBoth,
  "Jackal": JackalBoth,
  "KYVE": KyveBoth,
  "Lava": LavaBoth,
  "Mars": MarsBoth,
  "MultiversX": MultiversXDark,
  "Neutron": NeutronBoth,
  "Nomic": NomicDark,
  "NYM": NymDark,
  "Osmosis": OsmosisDark,
  "Persistence": PersistenceDark,
  "Quasar": QuasarBoth,
  "Quicksilver": QuicksilverDark,
  "Solana": SolanaDark,
  "Wormhole": WormholeBoth,
};

type Props = {
  networkName: string;
} & JSX.IntrinsicElements["img"];

const NetworkIcon: FC<Props> = ({ networkName, src: _, ...props }) => {
  const styles = useStyles();
  const lightUrl = Light[networkName as keyof typeof Light];
  const darkUrl = Dark[networkName as keyof typeof Dark];

  if (lightUrl && darkUrl) {
    return (
      <>
        <img alt="" css={styles.light} src={lightUrl} {...props} />
        <img alt="" css={styles.dark} src={darkUrl} {...props} />
      </>
    );
  }

  if (lightUrl) {
    return <img alt="" src={lightUrl} {...props} />;
  }

  if (darkUrl) {
    return <img alt="" src={darkUrl} {...props} />;
  }

  return null;
};

export default NetworkIcon;
