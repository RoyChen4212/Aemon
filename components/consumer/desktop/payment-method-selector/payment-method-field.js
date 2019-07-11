import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import CardPlaceholder from '../card-field/card-placeholder';

import './style.scss';

export const cardTypes = {
  VISA: 'visa',
  MASTER: 'master',
  AMERICAN_EXPRESS: 'american_express',
  DISCOVER: 'discover',
  DINERS_CLUB: 'diners_club',
  ADD_NEW: 'new',
};

const PaymentMethodField = ({ cardType, label }) => (
  <div className="pbg-consumer-desktop pbg-payment-method-field">
    <CardPlaceholder cardType={cardType === cardTypes.ADD_NEW ? undefined : cardType} />
    <div className="pbg-desktop-label-normal">
      <span>{label}</span>
    </div>
  </div>
);

PaymentMethodField.propTypes = {
  cardType: PropTypes.oneOf(_.map(cardTypes, value => value)).isRequired,
  label: PropTypes.string.isRequired,
};

export default PaymentMethodField;
