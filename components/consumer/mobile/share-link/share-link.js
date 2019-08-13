import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-share-link';

const ShareLink = ({ label }) => (
  <div className={baseClassName}>
    <span className="pbg-icon-link-small-gray" />
    <span className="pbg-mobile-label-normal">{label}</span>
  </div>
);

ShareLink.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ShareLink;
