import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const PurchaseImage = ({ src, className }) => (
  <img className={cx('pbg-consumer-desktop pbg-purchase-image', className)} src={src} />
);

PurchaseImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PurchaseImage.propTypes = {
  className: null,
};

export default PurchaseImage;
