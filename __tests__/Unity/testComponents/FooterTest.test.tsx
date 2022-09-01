import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../../../src/components/Footer/Footer';

describe('Test Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('Footer component must have 3 buttons', () => {
    const redirectButtons = screen.getAllByRole('button');
    expect(redirectButtons).toHaveLength(3);
  });

  it('Footer component must have a redirect Github button', () => {
    const githubButton = screen.getByLabelText('github-button');
    expect(githubButton).toBeInTheDocument();
  });

  it('Footer component must have a redirect Linkedin button', () => {
    const linkedinButton = screen.getByLabelText('linkedin-button');
    expect(linkedinButton).toBeInTheDocument();
  });

  it('Footer component must have a redirect Portfolio button', () => {
    const portfolioButton = screen.getByLabelText('portfolio-button');
    expect(portfolioButton).toBeInTheDocument();
  });
});
