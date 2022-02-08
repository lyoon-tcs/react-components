import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Lawrence Link', () => {
  render(<App />);
  screen.debug();
  const linkElement = screen.getByText('Learning Jest + React');
  expect(linkElement).toBeInTheDocument();
});
