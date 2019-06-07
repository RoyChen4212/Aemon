import React from 'react';

import Label from '../../shared/label';

import './style.css';

export * from '../../shared/label';

export default props => (
  <Label {...props} className={`${props.className} pbg-consumer-desktop`} />
);
