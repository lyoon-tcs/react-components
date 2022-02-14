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
import styles from './Button.module.css';

/**
 * @description - returns Button component
 * @param {string} props.buttonText - the button's text
 * @param {string} props.backgroundColor - the button's background color
 * @param {string} props.color - the button's font color
 * @param {string} props.size - the button's size (extra padding & font-size)
 * @return {jsx} - the Button component to render
 */
const Button = ({
  buttonText = 'btn',
  backgroundColor = 'green',
  color = '#f2ff40',
  size = 'sm',
  handleClick
}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]}`}
      style={{ backgroundColor, color }}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func
};

export default Button;
