import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';

import PaymentMethodSelectorMenu from './payment-method-selector-menu';
import PaymentMethodField from './payment-method-field';
import Picker from '../picker';

import './style.scss';

export const PAYMENT_METHOD_ADD_VALUE = '__ADD_Value';

/** @extends React.Component */
class PaymentMethodSelector extends Picker {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-picker pbg-payment-method-selector';

  static propTypes = {
    label: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    value: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    options: PropTypes.array.isRequired, // eslint-disable-line react/no-unused-prop-types
    onChange: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
    label: null,
    onChange: () => {},
  };

  get selectedItem() {
    return find(this.options, op => op.value === this.value);
  }

  onAddNewClick = () => {
    this.onChange({ target: { value: PAYMENT_METHOD_ADD_VALUE } });
  };

  renderPickerButton() {
    const { cardType, label } = this.selectedItem || {};

    return (
      <button
        className="pbg-picker-button"
        type="button"
        onFocus={this.onFocus}
        onClick={this.onButtonClick}
        onBlur={ev => this.onButtonBlur(ev, this.onBlur)}
      >
        {cardType && <PaymentMethodField cardType={cardType} label={label} />}
        <i className="pbg-picker-arrow" />
      </button>
    );
  }

  renderAddNewButton() {
    if (this.value === PAYMENT_METHOD_ADD_VALUE) {
      return null;
    }

    return (
      <div className="pbg-payment-method-selector-add-container">
        <p className="pbg-desktop-label-normal">Or</p>
        <button type="button" className="pbg-button pbg-consumer-desktop" onClick={this.onAddNewClick}>
          <span>Add New</span>
        </button>
      </div>
    );
  }

  render() {
    const { active } = this.state;

    return (
      <div className={this.className}>
        <div className="pbg-payment-method-selector-label">{this.renderLabel()}</div>
        <div className="pbg-picker-container">
          <div className="pbg-payment-method-selector-button-container">
            {this.renderPickerButton()}
            {this.renderAddNewButton()}
          </div>
          <PaymentMethodSelectorMenu
            options={this.options}
            active={active}
            selected={this.value}
            onOptionClick={this.onOptionClick}
          />
        </div>
      </div>
    );
  }
}

export default PaymentMethodSelector;
