import { Dispatch, SetStateAction } from 'react';
import { NetworkSummary } from '~src/utils/loadNetworkSummary';

/**
 * `NetworkBoxProps` is an object with a single property called `network` that is of type `Network`.
 * @property {Network} network - Network - The network to display in the box.
 */
export interface NetworkBoxProps {
  network: Network;
  networkSummary: NetworkSummary | undefined;
  showMobilePopover: string;
  setShowMobilePopover: Dispatch<SetStateAction<string>>;
}
