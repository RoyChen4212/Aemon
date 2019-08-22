import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-external-link';

const ExternalLink = ({ label, onClick }) => (
  <div className={baseClassName} onClick={onClick}>
    <span className="pbg-consumer-mobile pbg-label pbg-label-clickable">{label}</span>
    <i className="pbg-icon-external-link-small-blue" />
  </div>
);

ExternalLink.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ExternalLink;
