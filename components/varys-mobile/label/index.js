import React from 'react';
import './style.scss'

const CLICKABLE = 'clickable';
const INPUT = 'input';
const SECONDARY = 'secondary';
const STRONG = 'strong';

const BASE_CLASS = 'pbg-label';
const INPUT_CLASS = BASE_CLASS + ' pbg-label-input';
const CLICKABLE_CLASS = BASE_CLASS + ' pbg-label-clickable';
const SECONDARY_CLASS = BASE_CLASS + ' pbg-label-secondary';
const STRONG_CLASS = BASE_CLASS + ' pbg-label-strong';

export const classes = {
  base: BASE_CLASS,
  [STRONG]: STRONG_CLASS,
  [SECONDARY]: SECONDARY_CLASS,
  [INPUT]: INPUT_CLASS,
  [CLICKABLE]: CLICKABLE_CLASS,
}

const Label = (props) => {
  if (isClickable(props)) return clickableLabel(props);
  return normalLabel(props);
};

const isClickable = ({ type }) => type === CLICKABLE;

const clickableLabel = (props) => (
  <label className={className(props.type)}>
    <a href={props.href} onClick={props.onClick}>{props.children}</a>
  </label>
);

const normalLabel = (props) => (
  <label className={className(props.type)}>
    <span>{props.children}</span>
  </label>
);

const className = type => classes[type] || BASE_CLASS;

export const types = {
  CLICKABLE,
  INPUT,
  SECONDARY,
  STRONG,
};

export default Label;
