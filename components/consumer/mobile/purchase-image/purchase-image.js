import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-purchase-image';

const PurchaseImage = ({ src, className }) => <img className={cx(baseClassName, className)} src={src} />;

PurchaseImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PurchaseImage.defaultProps = {
  className: null,
};

export default PurchaseImage;
