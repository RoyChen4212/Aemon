import React from 'react';
import PropTypes from 'prop-types';
import { cardTypes } from './card-field-types';

import './style.scss';

const CardPlaceholder = ({ cardType }) => {
  switch (cardType) {
    case 'visa':
      return <div className="pbg-placeholder-icon pbg-visa-card" />;
    case 'master':
      return <div className="pbg-placeholder-icon pbg-master-card" />;
    case 'american_express':
      return <div className="pbg-placeholder-icon pbg-amex-card" />;
    case 'discover':
      return <div className="pbg-placeholder-icon pbg-discover-card" />;
    case 'diners_club':
      return <div className="pbg-placeholder-icon pbg-dinners-club-card" />;
    default:
      return <div className="pbg-placeholder-icon pbg-default-placeholder-icon" />;
  }
};

CardPlaceholder.propTypes = {
  cardType: PropTypes.oneOf(cardTypes),
};

CardPlaceholder.defaultProps = {
  cardType: null,
};

export default CardPlaceholder;
