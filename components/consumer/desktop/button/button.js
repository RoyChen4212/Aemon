import React from 'react';

const CLASS_NAME = 'pbg-button';

export default (props) => {
  return (
    <div>
      <button
        type={buttonType(props)}
        className={className(props)}
        onClick={configureOnClick(props)}
      >
        <span>{props.children}</span>
      </button>
    </div>
  );
}

const className = ({ disabled, className }) => {
  const base = `${CLASS_NAME} ${className}`;
  return disabled ? base + ' disabled' : base;
};

const configureOnClick = ({ disabled, onClick }) => {
  if (disabled) return;
  return onClick;
};

const buttonType = ({ onClick }) => !!onClick ? 'button' : 'submit';