// dependencies
import React from 'react';
import { render, screen } from '@testing-library/react';
// local files
import App from '../App';

test('renders Lawrence Link', () => {
  render(<App />);
  screen.debug();
  const linkElement = screen.getByText('Lawrence Yoon');
  expect(linkElement).toBeInTheDocument();
});
