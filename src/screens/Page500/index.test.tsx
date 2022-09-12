/* eslint-disable react/display-name */
import { act, render, screen } from '@testing-library/react';
import { motion } from 'framer-motion';
import { MockTheme } from '~tests/mocks';
import Component from '.';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('~src/components/LayoutComponent', () => (props: object) => (
  <motion.div data-testid="Layout" {...props} />
));
jest.mock('~src/components/SectionBox', () =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ main, ...props }: { [p: string]: unknown }) => (
    <motion.div data-testid="SectionBox" {...props} />
  )
);
jest.mock('~src/assets/unicorn404.svg', () => () => (
  <svg data-testid="unicorn404" />
));
// ==================================
// unit tests
// ==================================
describe('500', () => {
  it('matches snapshot', async () => {
    await act(async () => {
      global.innerWidth = 1400;
      global.dispatchEvent(new Event('resize'));
    });

    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>
    );

    expect(screen.getByTestId('Layout')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
