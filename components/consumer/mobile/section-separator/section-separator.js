import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-section-separator';

const SectionSeparator = ({ className }) => <div className={cx(baseClassName, className)} />;

SectionSeparator.propTypes = {
  className: PropTypes.string,
};

SectionSeparator.defaultProps = {
  className: null,
};

export default SectionSeparator;
