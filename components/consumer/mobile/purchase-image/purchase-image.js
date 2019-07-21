import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-purchase-image';

const PurchaseImage = ({ src }) => <div className={baseClassName} style={{ backgroundImage: `url(${src})` }} />;

PurchaseImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PurchaseImage;
