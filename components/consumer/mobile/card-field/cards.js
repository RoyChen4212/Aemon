import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';

import './style.scss';

const Cards = ({ allowedCardTypes }) => (
  <div className="pbg-consumer-desktop pbg-cards-wrapper">
    {includes(allowedCardTypes, 'visa') && <div className="pbg-icon-visa-small pbg-card" />}
    {includes(allowedCardTypes, 'master') && <div className="pbg-icon-mastercard-small pbg-card" />}
    {includes(allowedCardTypes, 'american_express') && <div className="pbg-icon-amex-small pbg-card" />}
    {includes(allowedCardTypes, 'discover') && <div className="pbg-icon-discover-small pbg-card" />}
    {includes(allowedCardTypes, 'diners_club') && <div className="pbg-icon-diners-club-small pbg-card" />}
  </div>
);

Cards.propTypes = {
  allowedCardTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cards;
