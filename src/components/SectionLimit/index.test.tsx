import { render, screen } from '@testing-library/react';
import React from 'react';
import { MockTheme } from '~tests/mocks';
import Component from '.';

// ==================================
// unit tests
// ==================================
describe('SectionLimit', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <MockTheme>
        <Component>
          <div>HELLO WORLD</div>
        </Component>
      </MockTheme>
    );
    expect(screen.getByText(/HELLO WORLD/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
