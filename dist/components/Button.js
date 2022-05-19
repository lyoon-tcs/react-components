"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonModule = _interopRequireDefault(require("../../css/Button.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * @description - returns Button component
 * @param {string} props.buttonText - the button's text
 * @param {string} props.backgroundColor - the button's background color
 * @param {string} props.color - the button's font color
 * @param {string} props.size - the button's size (extra padding & font-size)
 * @return {jsx} - the Button component to render
 */
const Button = _ref => {
  let {
    buttonText = 'HEY',
    backgroundColor = 'green',
    color = '#f2ff40',
    size = 'sm',
    handleClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(_ButtonModule.default.button, " ").concat(_ButtonModule.default[size]),
    style: {
      backgroundColor,
      color
    },
    onClick: handleClick
  }, buttonText);
};

Button.propTypes = {
  buttonText: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  color: _propTypes.default.string,
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  handleClick: _propTypes.default.func
};
var _default = Button;
exports.default = _default;