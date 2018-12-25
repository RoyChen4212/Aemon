import React from 'react';
import get from 'lodash/get';
import { HistoricalPicker, NewAddressField } from '../form-fields';
import { SmallButton } from '../button';
import AddOrSelectField from '../add-or-select-field';
import makeEvent from '../../../lib/make-event';
import './style.css';

class AddressField extends AddOrSelectField {
  baseClassName = 'pbg-form-field pbg-address-field';

  get options() { return this.props.addressOptions; }

  get field() {
    return (
      <NewAddressField
        onChange={(ev) => this.updateValue(ev.target.value)}
        name="newAddressField"
        countryOptions={this.props.countryOptions}
        labels={this.props.newAddressLabels}
        error={this.props.error}
      />
    );
  }

  updateValue = (value) => {
    const newValue = {
      ...this.props.value,
      ...value,
    };
    this.onChange(makeEvent(newValue));
  }
}

export { AddressField };
