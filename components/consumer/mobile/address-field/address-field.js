import React from 'react';
import get from 'lodash/get';
import { HistoricalPicker, NewAddressField } from '../form-fields';
import { SmallButton } from '../button';
import AddOrSelectField from '../add-or-select-field';
import makeEvent from '../../../lib/make-event';
import './style.css';

class AddressField extends AddOrSelectField {
  baseClassName = 'pbg-form-field pbg-address-field';

  get options() { return this.adaptedProps.addressOptions; }

  get field() {
    return (
      <NewAddressField
        onChange={(ev) => this.updateValue(ev.target.value)}
        name="newAddressField"
        value={this.adaptedProps.value}
        countryOptions={this.adaptedProps.countryOptions}
        labels={this.adaptedProps.newAddressLabels}
        error={this.adaptedProps.error}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    );
  }
}

export { AddressField };
