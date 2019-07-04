import React from 'react';

import './style.scss';

export default ({ className, label, hint }) => {
  const baseClassName = 'pbg-consumer-desktop pbg-divider';
  
  return (
    <div className={className ? `${baseClassName} ${className}` : baseClassName}>
      <div>
        <span className='pbg-desktop-secondary-text pbg-desktop-strong-text pbg-desktop-upcase-text'>{label}</span>
        {hint && <span className='pbg-desktop-secondary-text pbg-desktop-italic-text'>{hint}</span>}
      </div>
    </div>
  )
};
