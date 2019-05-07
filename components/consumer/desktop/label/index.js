import React from 'react';

import Label from '../../shared/label';
export * from '../../shared/label';

import './style.css';

export default (props) => {
  return (
    <span className="pbg-consumer-desktop">
      <Label {...props} />
    </span>
  );
};