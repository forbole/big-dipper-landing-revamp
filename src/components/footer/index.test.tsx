import React from 'react';
import { render } from '@testing-library/react';
import Component from '.';

// ==================================
// unit tests
// ==================================
describe('Footer', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <Component />,
    );
    // expect(screen.getByText(
    //   /Footer/i,
    // )).toBeInTheDocument();
    expect(container.querySelector('footer')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
