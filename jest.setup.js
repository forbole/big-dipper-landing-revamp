/* eslint-disable @typescript-eslint/no-empty-function */
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

// setup jest-fetch-mock
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

// eslint-disable-next-line max-len
process.env.NEXT_PUBLIC_NETWORK_LIST_API =
  'https://raw.githubusercontent.com/forbole/big-dipper-networks/main/networks.json';

/** * fix: `matchMedia` not present, legacy browsers require a polyfill */
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
