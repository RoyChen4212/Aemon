import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';

import './style.scss';

const Cards = ({ allowedCardTypes }) => (
  <div className="pbg-consumer-desktop pbg-cards-wrapper">
    {includes(allowedCardTypes, 'visa') && <div className="pbg-visa-card pbg-card" />}
    {includes(allowedCardTypes, 'master') && <div className="pbg-master-card pbg-card" />}
    {includes(allowedCardTypes, 'american_express') && <div className="pbg-amex-card pbg-card" />}
    {includes(allowedCardTypes, 'discover') && <div className="pbg-discover-card pbg-card" />}
    {includes(allowedCardTypes, 'diners_club') && <div className="pbg-dinners-club-card pbg-card" />}
  </div>
);

Cards.propTypes = {
  allowedCardTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cards;
