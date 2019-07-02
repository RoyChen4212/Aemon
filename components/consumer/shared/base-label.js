import React from 'react';
import PropTypes from 'prop-types';
import trim from 'lodash/trim';

const ACTIVE = 'active';
const CLICKABLE = 'clickable';
const ERROR = 'error';
const INPUT = 'input';
const SECONDARY = 'secondary';
const STRONG = 'strong';

const BASE_CLASS = 'pbg-label';
const ACTIVE_CLASS = 'pbg-label-active';
const CLICKABLE_CLASS = 'pbg-label-clickable';
const ERROR_CLASS = 'pbg-label-error';
const INPUT_CLASS = 'pbg-label-input';
const SECONDARY_CLASS = 'pbg-label-secondary';
const STRONG_CLASS = 'pbg-label-strong';

export const labelClassNames = {
  base: BASE_CLASS,
  [ACTIVE]: ACTIVE_CLASS,
  [CLICKABLE]: CLICKABLE_CLASS,
  [ERROR]: ERROR_CLASS,
  [INPUT]: INPUT_CLASS,
  [SECONDARY]: SECONDARY_CLASS,
  [STRONG]: STRONG_CLASS,
};

const buildClassName = ({ type, required, className }) => {
  let resultingClassName = BASE_CLASS;
  if (className) {
    resultingClassName += ` ${trim(className)}`;
  }

  if (required) {
    resultingClassName += ' required';
  }

  if (labelClassNames[type]) {
    resultingClassName += ` ${labelClassNames[type]}`;
  }

  return resultingClassName;
};

const clickableLabel = ({ href, onClick, children, type, required, className }) => (
  <label className={buildClassName({ type, required, className })}>
    <a href={href} onClick={onClick}>
      {children}
    </a>
  </label>
);

clickableLabel.propTypes = {
  href: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

clickableLabel.defaultProps = {
  href: null,
  type: null,
  required: false,
  className: null,
  children: null,
  onClick: null,
};

const normalLabel = ({ children, type, required, className }) => (
  <label className={buildClassName({ type, required, className })}>
    <span>{children}</span>
  </label>
);

normalLabel.propTypes = {
  type: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

normalLabel.defaultProps = {
  type: null,
  required: false,
  className: null,
  children: null,
};

const isClickable = ({ type, onClick }) => type === CLICKABLE || (type === ACTIVE && !!onClick);

const BaseLabel = props => {
  if (isClickable(props)) return clickableLabel(props);
  return normalLabel(props);
};

export const labelTypes = {
  ACTIVE,
  CLICKABLE,
  ERROR,
  INPUT,
  SECONDARY,
  STRONG,
};

export default BaseLabel;
