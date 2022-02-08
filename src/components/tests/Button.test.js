// dependencies
import React from 'react';
import { render, screen } from '@testing-library/react';
// local files
import Button from '../Button';

test('renders Button', () => {
  render(<Button />);
  screen.debug();
  const button = document.getElementsByTagName('button');
  console.log('BUTTON:', button);
});
