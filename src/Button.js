/*
 * Copyright (c) 2006-present TrueChoice IP Holding Company, Inc.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of TrueChoice IP Holding Company, Inc.
 * ("Confidential Information").  You shall not disclose such Confidential Information and shall
 * use it only in accordance with the terms of the license agreement you entered into with the company.
 */

// dependencies
// local files
// import PropTypes from 'prop-types';

/**
 * @description - returns Button component
 * @param {string} props.buttonText - the button's text
 * @return {jsx} - the Button component to render
 */
const Button = (props) => {
  return <button>{props.buttonText}</button>;
};

// Button.propTypes = {
//   buttonText: PropTypes.string
// };

export default Button;
