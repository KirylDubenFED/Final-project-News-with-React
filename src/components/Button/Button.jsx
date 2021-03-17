import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className }) => (

  <button type="button" className={`button ${className}`}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  className: PropTypes.string,
};
Button.defaultProps = {
  children: 'Кнопыщщщщща',
  className: '',
};

export default Button;