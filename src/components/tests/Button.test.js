// dependencies
import React from 'react';
import renderer from 'react-test-renderer';
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
  const buttonElement = screen.getByText(buttonText);

  test('should render button with proper text', () => {
    expect(buttonElement).toBeInTheDocument();
  });
  test('matches snapshot', () => {
    const tree = renderer.create(<Button buttonText={buttonText} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
