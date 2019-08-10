import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-back-link';

const BackLink = ({ label, href }) => (
  <div className={baseClassName}>
    <a href={href} className="pbg-mobile-label-link">
      <div className="pbg-icon-arrow-left-small-blue" />
      <div>{label}</div>
    </a>
  </div>
);

BackLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default BackLink;
