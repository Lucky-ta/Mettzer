import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/Header/Header';

describe('Test Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Header component must have Company title', () => {
    const headerTitle = screen.getByText('Mettzer');
    expect(headerTitle).toBeInTheDocument();
  });

  it('Header component must have 2 redirect buttons', () => {
    const redirectButtons = screen.getByRole('button');
    expect(redirectButtons).toBeInTheDocument();
  });

  it('Header component must have a redirect Favorite page button', () => {
    const favoritePageButton = screen.getByAltText('favorite-page');
    expect(favoritePageButton).toBeInTheDocument();
  });

  it('Header component must have a redirect Home page button', () => {
    const homePageButton = screen.getByAltText('home-page');
    expect(homePageButton).toBeInTheDocument();
  });
});
