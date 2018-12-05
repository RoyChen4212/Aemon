import React from 'react';
import Hint from '../hint';
import './style.scss'

const CLASS_NAME = 'pbg-button pbg-button-primary';

export const PrimaryButton = (props) => (
  <div>
    <button
      type={buttonType(props)}
      className={props.disabled ? CLASS_NAME + ' disabled' : CLASS_NAME}
      onClick={configureOnClick(props)}
      disabled={props.disabled}
    >
      <span>{props.children}</span>
    </button>
    {
      !!props.hint ?
      <div className="pbg-button-hint-container"><Hint>{props.hint}</Hint></div> :
      null
    }
  </div>
);

const buttonType = ({ onClick }) => {
  return !!onClick ? 'button' : 'submit';
};

const configureOnClick = (props) => {
  if (props.disabled) return;
  return props.onClick;
};
