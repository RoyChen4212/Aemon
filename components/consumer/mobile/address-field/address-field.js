import React from 'react';
import get from 'lodash/get';
import { HistoricalPicker, NewAddressField } from '../form-fields';
import { SmallButton } from '../button';
import FormField from '../form-field';
import makeEvent from '../../../lib/make-event';
import './style.css';

class AddressField extends FormField {
  baseClassName = 'pbg-form-field pbg-address-field';

  get className() {return this.baseClassName; }

  get addingNew() {
    const selected = get(this.props, 'value.selected');
    return selected === 'new';
  }

  get newAddressField() {
    if (!this.addingNew) return null;
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

  get addNewButton() {
    if (this.addingNew) return null;
    return (
      <SmallButton onClick={() => this.updateValue({ selected: 'new' })}>
        {this.props.addNewButtonLabel}
      </SmallButton>
    );
  }

  updateValue = (value) => {
    const newValue = {
      ...this.props.value,
      ...value,
    };
    this.onChange(makeEvent(newValue));
  }

  render() {
    return (
      <div className={this.className}>
        <HistoricalPicker
          name="selectedAddress"
          options={this.props.addressOptions}
          onChange={ev => this.updateValue({selected: ev.target.value })}
          value={get(this.props, 'value.selected')}
        />
        { this.newAddressField }
        { this.addNewButton }
      </div>
    )
  }
}

export { AddressField };
