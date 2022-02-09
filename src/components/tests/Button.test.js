/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

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
  const buttonElement = screen.getByText(buttonText);

  test('should render button with proper text', () => {
    expect(buttonElement).toBeInTheDocument();
  });
  test('matches snapshot', () => {
    const tree = renderer.create(<Button buttonText={buttonText} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
