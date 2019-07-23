import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-purchase-image';

const PurchaseImage = ({ src }) => <img className={baseClassName} src={src} />;

PurchaseImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PurchaseImage;
