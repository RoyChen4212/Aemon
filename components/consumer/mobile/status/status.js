import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-status';

const Status = ({label, value, iconType, tooltip}) => {


  const iconClassName = `pbg-icon-${iconType}-small-gray`;

  return (
    <div className={baseClassName}>
      <div className="pbg-status-wrapper">
        <div className="pbg-status-icon-container">
          <div className={iconClassName} />
        </div>
        <div className="pbg-status-texts-wrapper">
          <div className="pbg-mobile-small-normal">{label}</div>
          <div className="pbg-mobile-normal">{value}</div>
        </div>
      </div>
      {tooltip && <div className="pbg-icon-question-mark-small-blue" />}
    </div>
  );
};

Status.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
};

Status.defaultProps = {
  tooltip: null,
}

export default Status;
