import React from 'react';

import './style.css';

export default ({ className }) => {
  const baseClassName = 'pbg-consumer-desktop pbg-divider';
  return <div className={className ? `${baseClassName} ${className}` : baseClassName} />;
};
