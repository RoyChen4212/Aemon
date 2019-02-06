import React from 'react';

import Label from '../../shared/label';
export * from '../../shared/label';

import './style.css';

export default (props) => {
  return (
    <div className="pbg-consumer-mobile">
      <Label {...props} />
    </div>
  );
};