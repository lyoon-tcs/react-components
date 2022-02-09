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
import { render, screen } from '@testing-library/react';
// local files
import App from '../App';

test('renders h1', () => {
  render(<App />);
  screen.debug();
  const linkElement = screen.getByText('Lawrence Yoon');
  expect(linkElement).toBeInTheDocument();
});
