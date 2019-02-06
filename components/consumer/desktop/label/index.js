import React from 'react';

import Label from '../../shared/label';
export * from '../../shared/label';

import './style.css';

export default (props) => {
  return (
    <div className="pbg-consumer-desktop">
      <Label {...props} />
    </div>
  );
};