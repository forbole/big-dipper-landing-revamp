import React from 'react';
import { render } from '@testing-library/react';
import { MockTheme } from '@mocks';
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
    const { asFragment, getByAltText } = render(
      <MockTheme><Home /></MockTheme>,
    );
    expect(getByAltText(/^Big Dipper$/)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
