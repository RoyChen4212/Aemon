import React from 'react';
import './style.scss'

const ERROR = 'error';
const CLICKABLE = 'clickable';

export const classes = {
  base: 'pbg-hint',
  [ERROR]: 'pbg-hint-error',
  [CLICKABLE]: 'pbg-hint-clickable',
};

export const types = {
  ERROR,
  CLICKABLE,
};

export default (props) => {
  if (props.onClick) {
    return <span className={className(props)}><a onClick={props.onClick}>{props.children}</a></span>;
  }
  return <span className={className(props)}>{props.children}</span>;
};

const className = ({ type }) => !!type ? `${classes.base} ${classes[type]}` : classes.base;
