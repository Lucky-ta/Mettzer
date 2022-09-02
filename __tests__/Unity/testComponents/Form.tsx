import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchInput from '../../../src/components/SearchInput/SearchInput';

describe('Test Form component', () => {
  beforeEach(() => {
    render(<SearchInput />);
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
