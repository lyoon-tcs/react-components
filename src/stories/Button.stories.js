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
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg']
    },
    handleClick: { action: 'Handle Click' }
  }
};

const Template = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = {
  buttonText: 'Green',
  backgroundColor: 'green',
  color: '#f2ff40',
  size: 'md'
};

export const Red = Template.bind({});
Red.args = {
  buttonText: 'Red',
  backgroundColor: 'red',
  color: '#403535',
  size: 'md'
};

export const Small = Template.bind({});
Small.args = {
  buttonText: 'Small',
  backgroundColor: 'green',
  color: '#f2ff40',
  size: 'sm'
};

export const Medium = Template.bind({});
Medium.args = {
  buttonText: 'Medium',
  backgroundColor: 'green',
  color: '#f2ff40',
  size: 'md'
};

export const Large = Template.bind({});
Large.args = {
  buttonText: 'Large',
  backgroundColor: 'green',
  color: '#f2ff40',
  size: 'lg'
};
