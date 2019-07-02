import React from 'react';
import BaseLabel from '../../shared/base-label';

import './style.scss';

export * from '../../shared/base-label';

export default props => {
  const { className } = props;
  return <BaseLabel {...props} className={`${className} pbg-consumer-desktop`} />;
};
