import React from 'react';
import './style.css';

const Container = (props) => (
  <div className={className(props)}>
    {props.children}
  </div>
);

const className = (props) => {
  const base = 'pbg-consumer-desktop pbg-container';
  let _className = base;
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