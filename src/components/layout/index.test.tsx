import React, { ClassAttributes, HTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';
import Component from '.';

jest.mock('..', () => ({
  Nav: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) => <div data-testid="Nav" {...props} />,
  Footer: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) => <div data-testid="Footer" {...props} />,
}));
// ==================================
// unit tests
// ==================================
describe('Layout', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <Component>
        <div>hello world</div>
      </Component>,
    );
    expect(screen.getByText(
      /hello world/i,
    )).toBeInTheDocument();
    expect(container.querySelector('main')).not.toBeNull();
    expect(screen.getByTestId('Nav')).toBeInTheDocument();
    expect(screen.getByTestId('Footer')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
