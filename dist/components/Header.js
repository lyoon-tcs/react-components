"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HeaderModule = _interopRequireDefault(require("../../css/Header.module.css"));

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
 * @description - returns Header component
 * @param {string} props.title - the header's text
 * @param {string} props.heading - the heading (options: h1, h2, h3)
 * @return {jsx} - the Header component to render
 */
const Header = _ref => {
  let {
    title = 'Title',
    heading = 'h1'
  } = _ref;

  if (heading === 'h1') {
    return /*#__PURE__*/_react.default.createElement("h1", {
      style: {
        fontSize: '40px'
      },
      className: _HeaderModule.default.header
    }, title);
  }

  if (heading === 'h2') {
    return /*#__PURE__*/_react.default.createElement("h2", {
      style: {
        fontSize: '30px'
      },
      className: _HeaderModule.default.header
    }, title);
  }

  return /*#__PURE__*/_react.default.createElement("h3", {
    style: {
      fontSize: '20px'
    },
    className: _HeaderModule.default.header
  }, title);
};

Header.propTypes = {
  title: _propTypes.default.string,
  heading: _propTypes.default.oneOf(['h1', 'h2', 'h3'])
};
var _default = Header;
exports.default = _default;