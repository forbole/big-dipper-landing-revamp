/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
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
jest.mock('~src/components/SectionLimit', () => (props: object) => (
  <motion.div data-testid="SectionLimit" {...props} />
));
jest.mock('~src/components/ContentBox', () => (props: object) => (
  <motion.div data-testid="ContentBox" {...props} />
));
// ==================================
// unit tests
// ==================================
describe('About', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>
    );

    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByTestId('Layout')).toBeInTheDocument();
    expect(screen.getByTestId('SectionBox')).toBeInTheDocument();
    expect(screen.getByTestId('SectionLimit')).toBeInTheDocument();
    expect(screen.getByTestId('ContentBox')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
