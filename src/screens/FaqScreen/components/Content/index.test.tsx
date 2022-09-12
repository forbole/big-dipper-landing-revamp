/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react';
import { motion } from 'framer-motion';
import { MockTheme } from '~tests/mocks';
import Component from '.';

jest.mock('~src/components/ContentBox', () => (props: object) => (
  <motion.div data-testid="ContentBox" {...props} />
));
// ==================================
// unit tests
// ==================================
describe('Content', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <MockTheme>
        <Component
          content={[
            {
              question: 'How are you?',
              answer: 'Fine.',
            },
          ]}
        />
      </MockTheme>
    );
    expect(screen.getByText(/Fine./i)).toBeInTheDocument();
    expect(screen.getByTestId('ContentBox')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
