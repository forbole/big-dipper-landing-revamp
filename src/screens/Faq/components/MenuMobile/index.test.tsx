import { render, screen } from '@testing-library/react';
import React from 'react';
import { MockTheme } from '@/__mocks__';
import Component from '.';

// ==================================
// unit tests
// ==================================
describe('MenuMobile', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <MockTheme>
        <Component items={['gov']} selected={0} />
      </MockTheme>
    );
    expect(screen.getByText(/gov/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
