import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-desktop pbg-share-link';

const ShareLink = ({ label, className, href }) => {
  return (
    <div className={cx(baseClassName, className)}>
      <a className="pbg-desktop-label-link" href={href}>
        {label}
      </a>
    </div>
  );
};

ShareLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ShareLink.defaultProps = {
  className: null,
};

export default ShareLink;
