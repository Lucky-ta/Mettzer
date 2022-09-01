import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/Header/Header';

describe('Test Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Header component must have Company logo image', () => {
    const companyImage = screen.getByRole('img');
    expect(companyImage).toBeInTheDocument();
  });

  it('Header component must have 2 redirect buttons', () => {
    const redirectButtons = screen.getAllByRole('button');
    expect(redirectButtons).toHaveLength(2);
  });

  it('Header component must have a redirect Favorite page button', () => {
    const favoritePageButton = screen.getByLabelText('favorite-page');
    expect(favoritePageButton).toBeInTheDocument();
  });

  it('Header component must have a redirect Home page button', () => {
    const homePageButton = screen.getByLabelText('home-page');
    expect(homePageButton).toBeInTheDocument();
  });
});
