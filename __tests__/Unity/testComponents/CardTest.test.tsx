import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '../../../src/components/Card/Card';

describe('Test Card component', () => {
  beforeEach(() => {
    render(<Card />);
  });

  it('Card component must have a article title', () => {
    const cardTitle = screen.getByRole('heading');
    expect(cardTitle).toBeInTheDocument();
  });

  it('Card component must have a article author name', () => {
    const cardArticle = screen.getByLabelText('author');
    expect(cardArticle).toBeInTheDocument();
  });

  it('Card component must have a article type', () => {
    const cardType = screen.getByLabelText('type');
    expect(cardType).toBeInTheDocument();
  });

  it('Card component must have a article description', () => {
    const cardDescription = screen.getByLabelText('description');
    expect(cardDescription).toBeInTheDocument();
  });

  it('Card component must have a article url link', () => {
    const cardUrl = screen.getByLabelText('url');
    expect(cardUrl).toBeInTheDocument();
  });

  it('Card component must have a add favorite button', () => {
    const cardFavoriteButton = screen.getByRole('button');
    expect(cardFavoriteButton).toBeInTheDocument();
  });
});
