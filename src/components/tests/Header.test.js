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
import Header from '../Header';

afterEach(() => {
  cleanup();
});

describe('Header Component renders correctly', () => {
  const headerTitle = 'Hello world';

  test('should render Header with proper text', () => {
    render(<Header title={headerTitle} />);
    const headingElement = screen.getByText(headerTitle);
    expect(headingElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Header title={headerTitle} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
