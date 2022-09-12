/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next';
import loadNetworkSummaries from '~src/utils/loadNetworkSummaries';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 's-maxage=10');

  /* Loading the network summary for each network. */
  const result = await loadNetworkSummaries();

  /* Setting the status code to 200 and returning the result as JSON. */
  res.status(200).json(result);
}
