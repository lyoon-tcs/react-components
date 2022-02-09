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
import PropTypes from 'prop-types';

const Header = (props) => {
  return <h1 className="Header">{props.title}</h1>;
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
