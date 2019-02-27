import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const styleBooleans = [
  // sizes
  'wide',
  'small',
  'large',
  'block',

  // colors
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'default',
  'white',

  // types
  'link',
  'square',
  'active',
  'inactive',
  'loading',
  'disabled',
  'ghost',
];

const Button = (props) => {
  const {
    attrs,
    block,
    children,
    className,
    color,
    disabled,
    href,
    id,
    label,
    loading,
    onClick,
    outline,
    size,
    style,
    styleName,
    to,
    type,
    v2,
  } = props;

  const disable = disabled ? {
    disabled: 'disabled', 'aria-disabled': true,
  } : {};

  const classes = [
    styles.button,
    ...styleBooleans.map(op => (props[op] ? styles[op] : '')),
    styleName ? styles[styleName] : '',
    className,
  ];

  const buttonProps = {
    type,
    className: cx(classes, { disabled, loading }),
    style,
    id,
    ...disable,
    ...attrs,
  };

  const buttonChild = children || label;

  if (to) {
    return <Link {...buttonProps} to={to}>{buttonChild}</Link>;
  }
  if (href) {
    return <a {...buttonProps} href={href}>{buttonChild}</a>;
  }
  return <button {...buttonProps} onClick={onClick}>{buttonChild}</button>; // eslint-disable-line
};

Button.defaultProps = {
  attrs: {},
  block: false,
  children: null,
  className: null,
  color: 'default',
  disabled: false,
  href: null,
  label: 'Submit',
  loading: false,
  onClick: () => {},
  outline: false,
  size: null,
  style: {},
  styleName: '',
  type: 'button',
  id: null,
  v2: true,
  ...(styleBooleans.reduce((acc, option) => ({ ...acc, [option]: false })), {}),
};

Button.propTypes = {
  attrs: PropTypes.objectOf(PropTypes.string),
  block: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.node,
    ])),
  ]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link', 'default']),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  id: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  style: PropTypes.objectOf(PropTypes.string),
  styleName: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  v2: PropTypes.bool,
  ...(styleBooleans.reduce((acc, option) => ({ ...acc, [option]: PropTypes.bool })), {}),
};

export default Button;
