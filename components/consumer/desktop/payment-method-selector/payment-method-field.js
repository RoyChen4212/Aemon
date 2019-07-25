import React from 'react';
import PropTypes from 'prop-types';

import CardPlaceholder from '../card-field/card-placeholder';
import { cardTypes } from '../../shared/card-types';

import './style.scss';

const PaymentMethodField = ({ cardType, label }) => (
  <div className="pbg-consumer-desktop pbg-payment-method-field">
    <CardPlaceholder cardType={cardType === cardTypes.ADD_NEW ? undefined : cardType} />
    <div className="pbg-desktop-label-normal">
      <span>{label}</span>
    </div>
  </div>
);

PaymentMethodField.propTypes = {
  cardType: PropTypes.oneOf(cardTypes),
  label: PropTypes.string.isRequired,
};

PaymentMethodField.defaultProps = {
  cardType: null,
};

export default PaymentMethodField;
