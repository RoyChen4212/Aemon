import React from 'react';
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

const Label = props => {
  if (isClickable(props)) return clickableLabel(props);
  return normalLabel(props);
};

const isClickable = ({ type, onClick }) => type === CLICKABLE || (type === ACTIVE && !!onClick);

const clickableLabel = props => (
  <label className={className(props)}>
    <a href={props.href} onClick={props.onClick}>
      {props.children}
    </a>
  </label>
);

const normalLabel = props => (
  <label className={className(props)}>
    <span>{props.children}</span>
  </label>
);

const className = ({ type, required, className }) => {
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

export const labelTypes = {
  ACTIVE,
  CLICKABLE,
  ERROR,
  INPUT,
  SECONDARY,
  STRONG,
};

export default Label;
