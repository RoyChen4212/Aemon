import React from 'react';
import PropTypes from 'prop-types';

import Cards from './cards';
import DivInput from '../div-input';
import CardPlaceholder from './card-placeholder';
import { cardTypes } from '../../shared/card-types';

import './style.scss';

class CardField extends React.Component {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-text-field pbg-card-field';

  static propTypes = {
    label: PropTypes.string,
    allowedCardTypes: PropTypes.arrayOf(PropTypes.string),
    cardType: PropTypes.oneOf(cardTypes),
  };

  static defaultProps = {
    label: null,
    cardType: null,
    allowedCardTypes: cardTypes,
  };

  render() {
    const { label, allowedCardTypes, cardType } = this.props;

    return (
      <div className={this.baseClassName}>
        {label && (
          <div className="pbg-card-field-label-wrapper">
            <div className="pbg-desktop-label-normal pbg-label-with-cards">{label}</div>
            <Cards allowedCardTypes={allowedCardTypes} />
          </div>
        )}
        <div className="pbg-card-field-wrapper">
          <CardPlaceholder cardType={cardType} />
          <DivInput />
        </div>
      </div>
    );
  }
}

export default CardField;
