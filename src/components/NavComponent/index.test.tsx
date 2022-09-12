/* eslint-disable react/display-name */
import { render } from '@testing-library/react';
import { motion } from 'framer-motion';
import { MockTheme } from '~tests/mocks';
import Component from '.';

jest.mock('./components/MenuDesktop', () => () => (
  <motion.div data-testid="MenuDesktop" />
));
jest.mock('./components/MenuMobile', () => () => (
  <motion.div data-testid="MenuMobile" />
));

// ==================================
// unit tests
// ==================================
describe('Nav', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>
    );
    // expect(screen.getByText(
    //   /Home/i,
    // )).toBeInTheDocument();
    // expect(screen.getByText(
    //   /About/i,
    // )).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
