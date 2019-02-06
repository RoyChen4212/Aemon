import React from 'react';
import trim from 'lodash/trim';

const ERROR = 'error';
const CLICKABLE = 'clickable';

export const hintClassNames = {
  base: 'pbg-hint',
  [ERROR]: 'pbg-hint-error',
  [CLICKABLE]: 'pbg-hint-clickable',
};

export const hintTypes = {
  ERROR,
  CLICKABLE,
};

export default (props) => {
  if (props.onClick) {
    return <span className={className(props)}><a onClick={props.onClick}>{props.children}</a></span>;
  }
  return <span className={className(props)}>{props.children}</span>;
};

const className = ({ type, className }) => {
  let resultingClassName = hintClassNames.base;

  if (className) {
    resultingClassName += ` ${trim(className)}`;
  }

  if (hintClassNames[type]) {
    resultingClassName += ` ${hintClassNames[type]}`;
  }

  return resultingClassName;
};
