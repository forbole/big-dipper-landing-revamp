import React from 'react';
import { render, screen } from '@testing-library/react';
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
  ContentBox: (props: any) => <div data-testid="ContentBox" {...props} />,
}));
// ==================================
// unit tests
// ==================================
describe('About', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>,
    );

    expect(screen.getByText(
      /about/i,
    )).toBeInTheDocument();
    expect(screen.getByText(
      /description/i,
    )).toBeInTheDocument();
    expect(screen.getByTestId('Layout')).toBeInTheDocument();
    expect(screen.getByTestId('SectionBox')).toBeInTheDocument();
    expect(screen.getByTestId('SectionLimit')).toBeInTheDocument();
    expect(screen.getByTestId('ContentBox')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
