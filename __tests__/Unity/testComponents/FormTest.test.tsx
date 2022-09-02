import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from '../../../src/components/Form/Form';

describe('Test Form component', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('Form component must have a input', () => {
    const searchInput = screen.getByPlaceholderText('Article name');
    expect(searchInput).toBeInTheDocument();
  });

  it('Form component must have a search button', () => {
    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeInTheDocument();
  });
});
