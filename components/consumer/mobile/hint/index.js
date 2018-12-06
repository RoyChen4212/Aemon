import React from 'react';
import './style.scss'

const ERROR = 'error';

export const classes = {
  base: 'pbg-hint',
  [ERROR]: 'pbg-hint-error',
};

export const types = {
  ERROR,
};

export default (props) => <span className={className(props)}>{props.children}</span>;

const className = ({ type }) => type === ERROR ? `${classes.base} ${classes.error}` : classes.base;
