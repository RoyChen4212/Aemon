import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Cards = ({ allowedCardTypes }) => (
  <div className="pbg-consumer-desktop pbg-cards-wrapper">
    {allowedCardTypes.indexOf('visa') !== -1 && <div className="pbg-visa-card pgb-card" />}
    {allowedCardTypes.indexOf('master') !== -1 && <div className="pbg-master-card pgb-card" />}
    {allowedCardTypes.indexOf('american_express') !== -1 && <div className="pbg-amex-card pgb-card" />}
    {allowedCardTypes.indexOf('discover') !== -1 && <div className="pbg-discover-card pgb-card" />}
    {allowedCardTypes.indexOf('diners_club') !== -1 && <div className="pbg-dinners-club-card pgb-card" />}
  </div>
);

Cards.propTypes = {
  allowedCardTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cards;
