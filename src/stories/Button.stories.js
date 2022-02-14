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
// local files
import Button from '../components/Button';

export default {
  title: 'Buttons',
  component: Button
};

const Template = (args) => {
  return <Button {...args} />;
};

export const Green = Template.bind({});

Green.args = {
  buttonText: 'Hello',
  backgroundColor: 'purple'
};
