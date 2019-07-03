import React from 'react';
import NewAddressField from '../new-address-field';
import AddOrSelectField from '../add-or-select-field';

import './style.scss';

class AddressField extends AddOrSelectField {
  baseClassName = 'pbg-form-field pbg-address-field';

  get options() {
    return this.adaptedProps.addressOptions;
  }

  renderField() {
    return (
      <NewAddressField
        onChange={ev => this.updateValue(ev.target.value)}
        name="newAddressField"
        value={this.adaptedProps.value}
        countryOptions={this.adaptedProps.countryOptions}
        labels={this.adaptedProps.newAddressLabels}
        error={this.adaptedProps.error}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        forceErrorDisplay={this.adaptedProps.forceErrorDisplay}
      />
    );
  }
}

export default AddressField;
