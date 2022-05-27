import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MockTheme } from '@mocks';
import Component from '.';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Layout: (props: any) => <div data-testid="Layout" {...props} />,
  SectionBox: (props: any) => <div data-testid="SectionBox" {...props} />,
  SectionLimit: (props: any) => <div data-testid="SectionLimit" {...props} />,
}));

jest.mock('./components', () => ({
  MenuDesktop: (props: any) => <div data-testid="MenuDesktop" {...props} />,
  MenuMobile: (props: any) => <div data-testid="MenuMobile" {...props} />,
  Content: (props: any) => <div data-testid="Content" {...props} />,
}));
// ==================================
// unit tests
// ==================================
describe('FAQ', () => {
  it('matches snapshot', async () => {
    await act(async () => {
      global.innerWidth = 1400;
      global.dispatchEvent(new Event('resize'));
    });

    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>,
    );

    expect(screen.getByTestId('Layout')).toBeInTheDocument();
    expect(screen.getByTestId('SectionBox')).toBeInTheDocument();
    expect(screen.getByTestId('SectionLimit')).toBeInTheDocument();
    expect(screen.getByTestId('MenuDesktop')).toBeInTheDocument();
    expect(screen.getByTestId('Content')).toBeInTheDocument();
    expect(screen.getByTestId('MenuDesktop').hasAttribute('items')).toBe(true);

    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
