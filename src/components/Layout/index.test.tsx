import { render, screen } from '@testing-library/react';
import { motion } from 'framer-motion';
import { ComponentProps, forwardRef } from 'react';
import Component from '.';

jest.mock('..', () => ({
  Nav: (props: object) => <motion.div data-testid="Nav" {...props} />,
  Footer: forwardRef(function _(
    props: object,
    ref: ComponentProps<typeof motion.div>['ref']
  ) {
    return <motion.div data-testid="Footer" {...props} ref={ref} />;
  }),
}));
// ==================================
// unit tests
// ==================================
describe('Layout', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <Component>
        <div>hello world</div>
      </Component>
    );
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
    expect(container.querySelector('main')).not.toBeNull();
    expect(screen.getByTestId('Nav')).toBeInTheDocument();
    expect(screen.getByTestId('Footer')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
