import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const CardPlaceholder = ({ cardType }) => {
  switch (cardType) {
    case 'visa':
      return <div className="pgb-placeholder-icon pbg-visa-card" />;
    case 'master':
      return <div className="pgb-placeholder-icon pbg-master-card" />;
    case 'american_express':
      return <div className="pgb-placeholder-icon pbg-amex-card" />;
    case 'discover':
      return <div className="pgb-placeholder-icon pbg-discover-card" />;
    case 'diners_club':
      return <div className="pgb-placeholder-icon pbg-dinners-club-card" />;
    default:
      return <div className="pgb-placeholder-icon pbg-default-placeholder-icon" />;
  }
};

CardPlaceholder.propTypes = {
  cardType: PropTypes.oneOf(['visa', 'master', 'american_express', 'discover', 'diners_club']),
};

CardPlaceholder.defaultProps = {
  cardType: null,
};

export default CardPlaceholder;
