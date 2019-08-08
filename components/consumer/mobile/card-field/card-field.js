import React from 'react';
import PropTypes from 'prop-types';

import Cards from './cards';
import DivInput from '../div-input';
import { cardTypes } from '../../shared/card-types';

import './style.scss';

class CardField extends React.Component {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-text-field pbg-card-field';

  static propTypes = {
    label: PropTypes.string,
    allowedCardTypes: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    label: null,
    allowedCardTypes: cardTypes,
  };

  render() {
    const { label, allowedCardTypes } = this.props;

    return (
      <div className={this.baseClassName}>
        {label && (
          <div className="pbg-card-field-label-wrapper">
            <div className="pbg-mobile-label-normal pbg-label-with-cards">{label}</div>
            <Cards allowedCardTypes={allowedCardTypes} />
          </div>
        )}
        <div className="pbg-card-field-wrapper">
          <DivInput />
        </div>
      </div>
    );
  }
}

export default CardField;
