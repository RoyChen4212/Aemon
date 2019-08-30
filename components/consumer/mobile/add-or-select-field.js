import React from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import first from 'lodash/first';
import isString from 'lodash/isString';

import makeEvent from '../../lib/make-event';
import HistoricalPicker from './historical-picker';
import { SmallButton } from './button';
import Label, { labelTypes } from './label';
import Hint from './hint';
import FormField from './form-field';

class AddOrSelectField extends FormField {
  componentDidMount() {
    const selected = get(this.adaptedProps, 'value.selected');
    if (selected !== 'new' && get(this, 'options.length')) {
      const newValue = {
        ...this.adaptedProps.value,
        selected: isString(selected) ? selected : get(first(this.options), 'value'),
      };
      this.onChange(makeEvent(newValue));
    }
  }

  get className() {
    const { className } = this.props;
    return cx(this.baseClassName, className);
  }

  get addingNew() {
    if (!this.options || !this.options.length) return true;
    const selected = get(this.adaptedProps, 'value.selected');
    return selected === 'new';
  }

  renderLabel() {
    const { label, hint, required } = this.props;
    if (!label) return null;
    return (
      <div className="pbg-add-or-select-field-label">
        <Label type={labelTypes.STRONG} required={required}>
          {label}
        </Label>
        {hint ? (
          <React.Fragment>
            <br />
            <Hint>{hint}</Hint>
          </React.Fragment>
        ) : null}
      </div>
    );
  }

  renderPicker() {
    if (!this.options || !this.options.length) return null;
    return (
      <HistoricalPicker
        options={this.options}
        onChange={ev => this.updateValue({ selected: ev.target.value })}
        value={get(this.adaptedProps, 'value.selected')}
      />
    );
  }

  renderAddNewField() {
    if (!this.addingNew) return null;
    return this.renderField();
  }

  renderAddNewButton() {
    if (this.addingNew) return null;
    return (
      <SmallButton onClick={() => this.updateValue({ selected: 'new' })}>
        {this.adaptedProps.addNewButtonLabel}
      </SmallButton>
    );
  }

  updateValue = value => {
    const newValue = {
      ...this.adaptedProps.value,
      ...value,
    };
    this.onChange(makeEvent(newValue));
  };

  render() {
    return (
      <div className={this.className}>
        {this.renderLabel()}
        {this.renderPicker()}
        {this.renderAddNewField()}
        {this.renderAddNewButton()}
      </div>
    );
  }
}

export default AddOrSelectField;
