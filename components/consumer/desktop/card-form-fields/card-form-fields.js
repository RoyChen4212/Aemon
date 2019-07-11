import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import CardField from '../card-field/card-field';
import TextField from '../text-field';
import FieldStateProvider from '../../../../stories/util/field-state-provider';

class CardFormFields extends React.Component {
  baseClassName = 'pbg-consumer-desktop pbg-card-form-fields';

  static propTypes = {
    labels: PropTypes.shape({
      cardNumber: PropTypes.string.isRequired,
      expDate: PropTypes.string.isRequired,
      securityCode: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
    }).isRequired,
    allowedCardTypes: PropTypes.arrayOf(PropTypes.string),
    cardType: PropTypes.oneOf(['visa', 'master', 'american_express', 'discover', 'diners_club']),
  };

  static defaultProps = {
    cardType: null,
    allowedCardTypes: ['visa', 'master', 'american_express', 'discover', 'diners_club'],
  };

  render() {
    const {
      allowedCardTypes,
      cardType,
      labels: { cardNumber, expDate, securityCode, fullName, postalCode },
      ...rest
    } = this.props;

    return (
      <div className={this.baseClassName}>
        <div className="pbg-card-form-fields-col">
          <CardField allowedCardTypes={allowedCardTypes} cardType={cardType} label={cardNumber} />
          <FieldStateProvider component={TextField} name="fullName" label={fullName} placeholder=" " {...rest} />
        </div>
        <div className="pbg-card-form-fields-col">
          <FieldStateProvider component={TextField} name="expDate" label={expDate} placeholder="MM/YY" {...rest} />
          <FieldStateProvider component={TextField} name="postalCode" label={postalCode} placeholder=" " {...rest} />
        </div>
        <div className="pbg-card-form-fields-col">
          <FieldStateProvider component={TextField} name="secCode" label={securityCode} placeholder=" " {...rest} />
        </div>
      </div>
    );
  }
}

export default CardFormFields;
