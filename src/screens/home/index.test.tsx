import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('Dummy Test', () => {
  it('matches snapshot', async () => {
    const { asFragment } = render(<Home />);
    expect(screen.getByText(
      /hello world/i,
    )).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
