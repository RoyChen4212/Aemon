import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';
import Cards from './cards';
import DivInput from '../div-input';
import CardPlaceholder from './card-placeholder';
import { cardTypes } from '../../shared/card-types';

class CardField extends React.Component {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-field pbg-card-field';

  static propTypes = {
    label: PropTypes.string,
    allowedCardTypes: PropTypes.arrayOf(PropTypes.string),
    cardType: PropTypes.oneOf(cardTypes),
    className: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    cardType: null,
    className: null,
    allowedCardTypes: cardTypes,
  };

  render() {
    const { label, allowedCardTypes, cardType, className } = this.props;

    return (
      <div className={cx(this.baseClassName, className)}>
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
