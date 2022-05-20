import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from '.';

// ==================================
// unit tests
// ==================================
describe('Nav', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <Component />,
    );
    expect(screen.getByText(
      /Nav/i,
    )).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
