import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-external-link';

const ExternalLink = ({ label, onClick, className }) => (
  <div className={cx(baseClassName, className)} onClick={onClick}>
    <span className="pbg-consumer-mobile pbg-label pbg-label-clickable">{label}</span>
    <i className="pbg-icon-external-link-small-blue" />
  </div>
);

ExternalLink.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ExternalLink.defaultProps = {
  className: null,
};

export default ExternalLink;
