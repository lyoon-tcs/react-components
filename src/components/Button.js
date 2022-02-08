// dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <button data-testid={props.buttonText}>{props.buttonText}</button>;
};

Button.propTypes = {
  buttonText: PropTypes.string
};

export default Button;
