import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ShowMoreButton from '../../../src/components/ShowMoreButton/ShowMoreButton';

describe('Test Show More Button component', () => {
  beforeEach(() => {
    render(<ShowMoreButton />);
  });

  it('ShowMoreButton component must have a `Show more` text', () => {
    const showMoreButton = screen.getByText(/Show more/i);
    expect(showMoreButton).toBeInTheDocument();
  });
});
