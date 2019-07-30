import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import FormField from '../form-field';
import Picker from '../picker';

import './style.scss';
import TextField from '../../mobile/text-field';

/** @extends React.Component */
class PhoneField extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-phone-field';

  static propTypes = {
    label: PropTypes.string,
    phoneLabel: PropTypes.string,
    value: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    options: PropTypes.array, // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
    label: null,
    phoneLabel: null,
    value: '',
    options: [],
  };

  get options() {
    return this.adaptedProps.options;
  }

  get error() {
    const { touched } = this.state;
    return touched && get(this.adaptedProps, 'error.phone');
  }

  constructor(props) {
    super(props);

    const { value } = this.props;
    this.state = { selectedPicker: value, touched: false };
  }

  onAddNewClick = () => {
    this.onChangePicker({ target: { value: null } });
  };

  onBlur = value => {
    this.setState({ touched: true });
    return this.adaptedProps.onBlur ? this.adaptedProps.onBlur(value) : null;
  };

  onChange = value => {
    const { onChange } = this.adaptedProps;
    if (onChange) {
      onChange(value);
    }
  };

  onChangePicker = event => {
    const selectedPicker = event.target.value;

    this.setState({ selectedPicker });
    this.onChange({ ...event, target: { value: !selectedPicker ? '' : selectedPicker } });
  };

  renderPickerButton = () => {
    const { selectedPicker } = this.state;

    return (
      <Picker name="phone-picker" value={selectedPicker} onChange={this.onChangePicker} options={this.options} button />
    );
  };

  renderAddNewButton = () => {
    const { selectedPicker } = this.state;

    if (!selectedPicker) {
      return null;
    }

    return (
      <div className="pbg-phone-field-add-container">
        <p className="pbg-desktop-label-normal">Or</p>
        <button type="button" className="pbg-consumer-desktop pbg-button" onClick={this.onAddNewClick}>
          <span>Add New</span>
        </button>
      </div>
    );
  };

  renderInput = () => {
    const { phoneLabel } = this.props;
    const { selectedPicker } = this.state;

    if (selectedPicker) {
      return null;
    }

    return (
      <TextField
        name="phone-number"
        value={this.value}
        label={phoneLabel}
        error={this.error}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onF
      />
    );
  };

  render() {
    const { label } = this.props;

    return (
      <div className={this.className}>
        {label && <div className="pbg-desktop-label-normal">{label}</div>}
        <div className="pbg-phone-field-button-container">
          {this.renderPickerButton()}
          {this.renderAddNewButton()}
        </div>
        {this.renderInput()}
      </div>
    );
  }
}

export default PhoneField;
