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
  component: Button,
  argTypes: {
    handleClick: { action: 'Handle Click' },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg']
    }
  }
};

const Template = (args) => {
  return <Button {...args} />;
};

export const Green = Template.bind({});
Green.args = {
  buttonText: 'Hello',
  backgroundColor: 'green',
  size: 'md'
};

export const Red = Template.bind({});
Red.args = {
  buttonText: 'Red btn',
  backgroundColor: 'red',
  size: 'sm'
};
