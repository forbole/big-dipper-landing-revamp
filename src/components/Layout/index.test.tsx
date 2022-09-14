import Box from '@mui/material/Box';
import { render, screen } from '@testing-library/react';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import Component from '.';

jest.mock('..', () => ({
  Nav: (props: object) => <Box data-testid="Nav" {...props} />,
  Footer: forwardRef<HTMLElement, BarProp>(function _(props, ref) {
    return <motion.footer data-testid="Footer" {...props} ref={ref} />;
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
