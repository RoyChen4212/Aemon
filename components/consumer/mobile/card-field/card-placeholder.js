import React from 'react';
import PropTypes from 'prop-types';
import { cardTypes } from '../../shared/card-types';

import './style.scss';

const CardPlaceholder = ({ cardType }) => {
  switch (cardType) {
    case 'visa':
      return <div className="pbg-placeholder-icon pbg-icon-visa-big" />;
    case 'master':
      return <div className="pbg-placeholder-icon pbg-icon-mastercard-big" />;
    case 'american_express':
      return <div className="pbg-placeholder-icon pbg-icon-amex-big" />;
    case 'discover':
      return <div className="pbg-placeholder-icon pbg-icon-discover-big" />;
    case 'diners_club':
      return <div className="pbg-placeholder-icon pbg-icon-diners-club-big" />;
    default:
      return <div className="pbg-placeholder-icon pbg-icon-card-placeholder-big" />;
  }
};

CardPlaceholder.propTypes = {
  cardType: PropTypes.oneOf(cardTypes),
};

CardPlaceholder.defaultProps = {
  cardType: null,
};

export default CardPlaceholder;
