import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchInput from '../../../src/components/SearchInput/SearchInput';

describe('Test Search Input component', () => {
  beforeEach(() => {
    render(<SearchInput />);
  });

  it('Search Input component follow place holder text: \'Article name\'', () => {
    const searchInput = screen.getByPlaceholderText('Article name');
    expect(searchInput).toBeInTheDocument();
  });
});
