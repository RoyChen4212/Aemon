import React from 'react';

import Label from '../../shared/label';

import './style.scss';

export * from '../../shared/label';

export default props => {
  const { className } = props;
  return <Label {...props} className={`${className} pbg-consumer-desktop`} />;
};
