/* eslint-disable @typescript-eslint/no-empty-function */
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// setup jest-fetch-mock
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

jest.mock("next/dynamic", () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock("next/router", () => ({
  useRouter() {
    return {
      asPath: "/",
      events: {
        off: jest.fn(),
        on: jest.fn(),
      },
      pathname: "/",
      query: "",
      route: "/",
    };
  },
}));

/** * fix: `matchMedia` not present, legacy browsers require a polyfill */
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener () {},
      matches: false,
      removeListener () {},
    };
  };

const observe = jest.fn();
const unobserve = jest.fn();
const disconnect = jest.fn();

// you can also pass the mock implementation
// to jest.fn as an argument
global.IntersectionObserver = jest.fn(() => ({
  disconnect,
  observe,
  unobserve,
}));
