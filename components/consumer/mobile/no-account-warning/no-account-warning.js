import React from 'react';
import { H3 } from '../heading';
import { SmallButton } from '../button';

import './style.css';

export const NoAccountWarning = (props) => (
  <div className={className(props)}>
    <div className="d-flex">
      <img src="https://assets.paybygroup.com/images/icons/warning.svg" />
      <div className="flex-grow-1">
        <H3>{props.title}</H3>
      </div>
    </div>
    <p>{props.text}</p>
    <div>
      <SmallButton onClick={props.onClick}>{props.ctaText}</SmallButton>
    </div>
  </div>
);

const className = (props) => {
  let base = 'pbg-consumer-mobile pbg-no-account-warning';
  if (props.className) {
    base += ` ${props.className}`;
  }

  if (props.type && classNames[props.type]) return `${base} ${classNames[props.type]}`;

  return base;
}

export default NoAccountWarning;