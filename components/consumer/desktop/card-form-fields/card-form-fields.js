import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';

import CardField from '../card-field/card-field';
import TextField from '../text-field';
import { cardTypes, defaultCardsConfig } from '../card-field/card-field-types';

import './style.scss';
import DivInput from '../div-input/div-input';

class CardFormFields extends React.Component {
  baseClassName = 'pbg-consumer-desktop pbg-card-form-fields';

  static propTypes = {
    labels: PropTypes.shape({
      cardNumber: PropTypes.string,
      expDate: PropTypes.string,
      securityCode: PropTypes.string,
      fullName: PropTypes.string,
      postalCode: PropTypes.string,
    }).isRequired,
    allowedCardTypes: PropTypes.arrayOf(PropTypes.string),
    cardType: PropTypes.oneOf(cardTypes),
    config: PropTypes.arrayOf(PropTypes.oneOf(defaultCardsConfig)),
  };

  static defaultProps = {
    cardType: null,
    allowedCardTypes: cardTypes,
    config: defaultCardsConfig,
  };

  render() {
    const {
      allowedCardTypes,
      cardType,
      labels: { cardNumber, expDate, securityCode, fullName, postalCode },
      config,
      ...rest
    } = this.props;

    return (
      <div className={this.baseClassName}>
        <div className="pbg-card-form-fields-col">
          {includes(config, 'cardNumber') && (
            <CardField allowedCardTypes={allowedCardTypes} cardType={cardType} label={cardNumber} />
          )}
          {includes(config, 'fullName') && (
            <TextField
              name="fullName"
              label={fullName}
              className="pbg-card-fields-full-name"
              placeholder=" "
              {...rest}
            />
          )}
        </div>
        <div className="pbg-card-form-fields-col">
          {includes(config, 'expDate') && (
            <TextField
              name="expDate"
              label={expDate}
              className="pbg-card-fields-exp-date"
              placeholder="MM/YY"
              {...rest}
            />
          )}
          {includes(config, 'postalCode') && (
            <TextField
              name="postalCode"
              label={postalCode}
              className="pbg-card-fields-exp-date"
              placeholder=" "
              {...rest}
            />
          )}
        </div>
        <div className="pbg-card-form-fields-col">
          {includes(config, 'securityCode') && (
            <div className="pbg-card-fields-sec-code">
              <span className="pbg-label pbg-consumer-desktop">{securityCode}</span>
              <DivInput name="secCode" placeholder=" " {...rest} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CardFormFields;
