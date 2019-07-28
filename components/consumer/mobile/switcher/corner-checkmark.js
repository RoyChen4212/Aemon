import React from 'react';

import './style.scss';
import img from '../../shared/img/pbg-check-mark-small-white.svg';

const baseClassName = 'pbg-consumer-mobile pbg-corner-checkmark';

const CornerCheckmark = () => (
  <div className={baseClassName}>
    <div className="pbg-checkmark" />
    <img src={img} alt="mark" />
  </div>
);

export default CornerCheckmark;
