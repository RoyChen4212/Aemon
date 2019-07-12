import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';

import CardField from '../card-field/card-field';
import TextField from '../text-field';
import { cardTypes } from '../card-field/card-field-types';

import './style.scss';
import DivInput from '../div-input/div-input';

const defaultConfig = ['cardNumber', 'fullName', 'expDate', 'securityCode', 'postalCode'];

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
    config: PropTypes.arrayOf(PropTypes.oneOf(defaultConfig)),
  };

  static defaultProps = {
    cardType: null,
    allowedCardTypes: cardTypes,
    config: defaultConfig,
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
          {includes(config, 'fullName') && <TextField name="fullName" label={fullName} placeholder=" " {...rest} />}
        </div>
        <div className="pbg-card-form-fields-col">
          {includes(config, 'expDate') && <TextField name="expDate" label={expDate} placeholder="MM/YY" {...rest} />}
          {includes(config, 'postalCode') && (
            <TextField name="postalCode" label={postalCode} placeholder=" " {...rest} />
          )}
        </div>
        <div className="pbg-card-form-fields-col">
          {includes(config, 'securityCode') && (
            <div>
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
