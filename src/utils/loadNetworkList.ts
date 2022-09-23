import networksJson from '../../networks.json';

/**
 * It fetches a JSON file from a URL, and returns the data
 * @returns An array of objects.
 */
export default function loadNetworkList(): Array<Network> {
  return networksJson
}
