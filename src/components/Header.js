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

/**
 * @description - returns Header component
 * @param {string} props.title - the header's text
 * @return {jsx} - the Header component to render
 */
const Header = ({ title = 'MAIN', anothaOne = 2 }) => {
  return (
    <h1 className="Header">
      {title}
      <span style={{ paddingLeft: '20px' }}>{anothaOne}</span>
    </h1>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  anothaOne: PropTypes.number
};

export default Header;
