import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockTheme } from '@mocks';
import Component from '.';

jest.mock('@components', () => ({
  ContentBox: (props: any) => <div data-testid="ContentBox" {...props} />,
}));
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
      </MockTheme>,
    );
    expect(screen.getByText(/Fine./i)).toBeInTheDocument();
    expect(screen.getByTestId('ContentBox')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
