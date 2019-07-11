import React from 'react';
import PropTypes from 'prop-types';

import PickerMenu from '../picker-menu';
import PaymentMethodField from './payment-method-field';

import './style.scss';

/** @extends React.Component */
class PaymentMethodSelectorMenu extends PickerMenu {
  static propTypes = {
    selected: PropTypes.string.isRequired,
  };

  renderOption = ({ value, label, cardType }, i) => {
    const { selected } = this.props;
    const selectedClass = value === selected ? 'selected' : '';
    const first = i === 0 ? 'picker-menu-item-rounded-top' : '';
    const last = i === this.options.length - 1 ? 'picker-menu-item-rounded-bottom' : '';
    return (
      <div
        key={value}
        className={`picker-menu-item ${selectedClass} ${first} ${last}`}
        onClick={this.onOptionClick(value)}
      >
        <PaymentMethodField cardType={cardType} label={label} />
      </div>
    );
  };
}

export default PaymentMethodSelectorMenu;
