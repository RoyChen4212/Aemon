import React from 'react';

import './style.scss';

const buildClassName = props => {
  const base = 'pbg-consumer-desktop pbg-container';
  let className = props.className ? `${base} ${props.className}` : base;
  if (props.solid) {
    className += ' pbg-container-solid';
  }
  if (props.stroked) {
    className += ' pbg-container-stroked';
  }
  if (props.shadow1 && !props.shadow2) {
    className += ' pbg-container-shadow-1';
  }
  if (props.shadow2) {
    className += ' pbg-container-shadow-2';
  }
  return className;
};

const Container = React.forwardRef((props, ref) => (
  <div className={buildClassName(props)} ref={ref}>
    {props.children}
  </div>
));

export default Container;
