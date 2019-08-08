import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-share-link';

const ShareLink = ({ href }) => (
  <div className={baseClassName}>
    <span className="pbg-icon-link-small-gray" />
    <a href={href}>{href}</a>
  </div>
);

ShareLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default ShareLink;
