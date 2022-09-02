import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loading from '../../../src/components/Loading/Loading';

describe('Test Loading component', () => {
  beforeEach(() => {
    render(<Loading />);
  });

  it('Loading component must have a `Loading...` text', () => {
    const loadingComponent = screen.getByText(/Loading.../i);
    expect(loadingComponent).toBeInTheDocument();
  });
});
