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

export default props => {
  if (props.onClick) {
    return mainTag(props, <a onClick={props.onClick}>{props.children}</a>);
  }
  return mainTag(props, props.children);
};

const mainTag = (props, content) => {
  if (props.multiline) {
    return <p className={className(props)}>{content}</p>;
  }
  return <span className={className(props)}>{content}</span>;
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
