import React from 'react';
import './style.css';

export default (props) => (
  <div className={className(props)}>
    <span className="pbg-modal-alert-title">{props.title}</span>
    <span className="pbg-modal-alert-text">{text(props)}</span>
  </div>
);

const className = (props) => {
  const base = 'pbg-consumer-desktop pbg-modal-alert';
  if (props.error) return base + ' pbg-modal-alert-error';
  if (props.warning) return base + ' pbg-modal-alert-warning';
  if (props.success) return base + ' pbg-modal-alert-success';
  return base;
}

const text = (props) => {
  if (props.text && props.text.label) {
    return <a onClick={props.text.action}>{props.text.label}</a>;
  }
  return props.text;
}