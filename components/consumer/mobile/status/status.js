import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-status';

const Status = ({ label, value, iconType, tooltip, className }) => {
  const iconClassName = `pbg-icon-${iconType}-small-gray`;

  return (
    <div className={cx(baseClassName, className)}>
      <div className="pbg-status-wrapper">
        <div className="pbg-status-icon-container">
          <div className={iconClassName} />
        </div>
        <div className="pbg-status-texts-wrapper">
          <div className="pbg-mobile-small-normal">
            {label}
            {tooltip && <div className="pbg-icon-link-question-mark-blue" />}
          </div>
          <div className="pbg-mobile-label-normal">{value}</div>
        </div>
      </div>
    </div>
  );
};

Status.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  className: PropTypes.string,
};

Status.defaultProps = {
  tooltip: null,
  className: null,
};

export default Status;
