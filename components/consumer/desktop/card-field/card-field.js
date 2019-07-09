import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import BaseLabel from '../../shared/base-label';
import Cards from './cards';
import DivInput from '../div-input';

class CardField extends React.Component {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-field pbg-card-field';

  static propTypes = {
    label: PropTypes.string,
  };

  static defaultProps = {
    label: 'Card Number',
  };

  render() {
    const { label } = this.props;

    return (
      <div className={this.baseClassName}>
        <BaseLabel className="pbg-consumer-desktop">
          <div className="pbg-card-field-label-wrapper">
            <div className="pbg-label-with-cards">{label}</div>
            <Cards />
          </div>
        </BaseLabel>
        <div className="pbg-card-field-wrapper">
          <div className="pgb-placeholder-icon" />
          <DivInput />
        </div>
      </div>
    );
  }
}

export default CardField;
