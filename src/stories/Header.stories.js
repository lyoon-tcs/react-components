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
import Header from '../components/Header';

export default {
  title: 'Components/Headers',
  component: Header,
  argTypes: {
    heading: {
      control: { type: 'radio' },
      options: ['h1', 'h2', 'h3']
    }
  }
};

// work on finding difference between adding a default header here, and default header in actual Header.js (in props).
// Finish creating multiple instances, try out different props
const Template = (args) => {
  console.log('ARGS:', args);
  return <Header {...args} />;
};

export const LargeHeader = Template.bind({});
LargeHeader.args = {
  title: 'Small Header',
  heading: 'h1'
};

export const MediumHeader = Template.bind({});
MediumHeader.args = {
  title: 'Medium Header',
  heading: 'h2'
};
