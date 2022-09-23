import CircularProgress from '@mui/material/CircularProgress';
import dynamic from 'next/dynamic';
import { Component, FC, PropsWithChildren, ReactNode, Suspense } from 'react';

const Icons = {
  Agoric: dynamic(() => import(`@/src/assets/logos/agoric`), { suspense: true, ssr: false }),
  Akash: dynamic(() => import(`@/src/assets/logos/akash`), { suspense: true, ssr: false }),
  AssetMantle: dynamic(() => import(`@/src/assets/logos/assetMantle`), { suspense: true, ssr: false }),
  'Band Protocol': dynamic(() => import(`@/src/assets/logos/bandProtocol`), { suspense: true, ssr: false }),
  Bitsong: dynamic(() => import(`@/src/assets/logos/bitsong`), { suspense: true, ssr: false }),
  Cheqd: dynamic(() => import(`@/src/assets/logos/cheqd`), { suspense: true, ssr: false }),
  Comdex: dynamic(() => import(`@/src/assets/logos/comdex`), { suspense: true, ssr: false }),
  'Cosmos Hub': dynamic(() => import(`@/src/assets/logos/cosmosHub`), { suspense: true, ssr: false }),
  Crescent: dynamic(() => import(`@/src/assets/logos/crescent`), { suspense: true, ssr: false }),
  'Crypto.org Chain': dynamic(() => import(`@/src/assets/logos/cryptoorgChain`), { suspense: true, ssr: false }),
  Desmos: dynamic(() => import(`@/src/assets/logos/desmos`), { suspense: true, ssr: false }),
  'e-Money': dynamic(() => import(`@/src/assets/logos/eMoney`), { suspense: true, ssr: false }),
  Elrond: dynamic(() => import(`@/src/assets/logos/elrond`), { suspense: true, ssr: false }),
  Evmos: dynamic(() => import(`@/src/assets/logos/evmos`), { suspense: true, ssr: false }),
  'Fetch.AI': dynamic(() => import(`@/src/assets/logos/fetchAI`), { suspense: true, ssr: false }),
  Flow: dynamic(() => import(`@/src/assets/logos/flow`), { suspense: true, ssr: false }),
  Kava: dynamic(() => import(`@/src/assets/logos/kava`), { suspense: true, ssr: false }),
  LikeCoin: dynamic(() => import(`@/src/assets/logos/likeCoin`), { suspense: true, ssr: false }),
  Osmosis: dynamic(() => import(`@/src/assets/logos/osmosis`), { suspense: true, ssr: false }),
  Provenance: dynamic(() => import(`@/src/assets/logos/provenance`), { suspense: true, ssr: false }),
  'Regen Network': dynamic(() => import(`@/src/assets/logos/regenNetwork`), { suspense: true, ssr: false }),
  Rizon: dynamic(() => import(`@/src/assets/logos/rizon`), { suspense: true, ssr: false }),
  Sifchain: dynamic(() => import(`@/src/assets/logos/sifchain`), { suspense: true, ssr: false }),
  Solana: dynamic(() => import(`@/src/assets/logos/solana`), { suspense: true, ssr: false }),
};

type Props = {
  networkName: string;
} & JSX.IntrinsicElements['svg'];

const NetworkIcon: FC<Props> = ({ networkName, ...props }) => {
  const Component = Icons[networkName as keyof typeof Icons];
  if (!Component) return <svg {...props}></svg>;
  return (
    <ErrorBoundary fallback={<svg {...props}></svg>}>
      <Suspense fallback={<CircularProgress />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

/* If an error occurs, don't render anything. */
class ErrorBoundary extends Component<PropsWithChildren<{ fallback: ReactNode }>, Error> {
  static getDerivedStateFromError(error: Error) {
    return error;
  }
  render() {
    if (this.state) return this.props.fallback;
    return this.props.children;
  }
}

export default NetworkIcon;
