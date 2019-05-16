import React from 'react';
import './style.css';

const Container = React.forwardRef((props, ref) => (
  <div className={className(props)} ref={ref}>
    {props.children}
  </div>
));

const className = (props) => {
  const base = 'pbg-consumer-desktop pbg-container';
  let _className = props.className ? `${base} ${props.className}` : base;
  if (props.solid) {
    _className += ' pbg-container-solid';
  }
  if (props.stroked) {
    _className += ' pbg-container-stroked'; 
  }
  if (props.shadow1 && !props.shadow2) {
    _className += ' pbg-container-shadow-1';
  }
  if (props.shadow2) {
    _className += ' pbg-container-shadow-2';
  }
  return _className;
};

export default Container;