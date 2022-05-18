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
// local files
import styles from '../../css/Header.module.css';

/**
 * @description - returns Header component
 * @param {string} props.title - the header's text
 * @param {string} props.heading - the heading (options: h1, h2, h3)
 * @return {jsx} - the Header component to render
 */
const Header = ({ title = 'Title', heading = 'h1' }) => {
  if (heading === 'h1') {
    return (
      <h1 style={{ fontSize: '40px' }} className={styles.header}>
        {title}
      </h1>
    );
  }
  if (heading === 'h2') {
    return (
      <h2 style={{ fontSize: '30px' }} className={styles.header}>
        {title}
      </h2>
    );
  }
  return (
    <h3 style={{ fontSize: '20px' }} className={styles.header}>
      {title}
    </h3>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.oneOf(['h1', 'h2', 'h3'])
};

export default Header;
