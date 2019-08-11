import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-back-link';

const BackLink = ({ label, href, onClick }) => (
  <div className={baseClassName}>
    {href ? (
      <a href={href} className="pbg-mobile-label-link">
        <div className="pbg-icon-arrow-left-small-blue" />
        <div>{label}</div>
      </a>
    ) : (
      <div className="pbg-mobile-label-link" onClick={onClick}>
        <div className="pbg-icon-arrow-left-small-blue" />
        <div>{label}</div>
      </div>
    )}
  </div>
);

BackLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

BackLink.defaultProps = {
  href: null,
  onClick: null,
};

export default BackLink;
