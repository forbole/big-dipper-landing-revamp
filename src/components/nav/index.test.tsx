import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockTheme } from '@mocks';
import Component from '.';

// ==================================
// unit tests
// ==================================
describe('Nav', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>,
    );
    expect(screen.getByText(
      /Home/i,
    )).toBeInTheDocument();
    expect(screen.getByText(
      /About/i,
    )).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
