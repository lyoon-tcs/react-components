// dependencies
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
// local files
import Button from '../Button';

afterEach(() => {
  cleanup();
});

describe('Button Component renders correctly', () => {
  const buttonText = 'hello world';
  render(<Button buttonText={buttonText} />);
  screen.debug();
  const buttonElement = screen.getByTestId(buttonText);

  test('should render button correctly, through data-testid', () => {
    expect(buttonElement).toBeInTheDocument();
  });
  test('have proper Button text', () => {
    expect(buttonElement).toHaveTextContent(buttonText);
  });
});
