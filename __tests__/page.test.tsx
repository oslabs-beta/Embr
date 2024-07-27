import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import '@testing-library/jest-dom/extend-expect'; // For the toBeInTheDocument matcher

test('renders Navbar component', () => {
  render(<Home />);
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});