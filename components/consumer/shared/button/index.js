import React from 'react';
import Hint from '../hint';

const CLASS_NAME = 'pbg-button';

export default (props) => (
  <div>
    <button
      type={buttonType(props)}
      className={className(props)}
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

const buttonType = ({ onClick }) => !!onClick ? 'button' : 'submit';

const className = ({ disabled, className }) => {
  const base = `${CLASS_NAME} ${className}`;
  return disabled ? base + ' disabled' : base;
};

const configureOnClick = ({ disabled, onClick }) => {
  if (disabled) return;
  return onClick;
};
