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
