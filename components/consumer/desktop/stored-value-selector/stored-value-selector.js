import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import FormField from '../form-field';
import Picker from '../picker';

import './style.scss';

/** @extends React.Component */
class StoredValueSelector extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-stored-value-selector';

  static propTypes = {
    label: PropTypes.string,
    picker: PropTypes.elementType,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // eslint-disable-line react/no-unused-prop-types
    children: PropTypes.node,
    options: PropTypes.arrayOf(PropTypes.object),
    defaultOption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    orText: PropTypes.string.isRequired,
    addNewText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    label: null,
    picker: Picker,
    value: null,
    children: null,
    options: [],
  };

  get value() {
    const { defaultOption } = this.props;
    return get(this, 'adaptedProps.value') || defaultOption;
  }

  onAddNewClick = () => {
    const { defaultOption } = this.props;

    this.onChange({ target: { value: defaultOption } });
  };

  renderPicker = () => {
    const { picker: PickerComponent, options } = this.props;

    if (options.length === 0) {
      return null;
    }
    return (
      <PickerComponent
        name="stored-value-selector-picker"
        value={this.value}
        options={options}
        onChange={this.onChange}
        button
      />
    );
  };

  renderAddNewButton = () => {
    const { orText, addNewText, defaultOption } = this.props;
    if (this.value === defaultOption) {
      return null;
    }

    return (
      <div className="pbg-stored-value-selector-add-container">
        <p className="pbg-desktop-paragraph">{orText}</p>
        <span className="pbg-desktop-label-link" onClick={this.onAddNewClick}>
          {addNewText}
        </span>
      </div>
    );
  };

  renderChildren = () => {
    const { children, defaultOption } = this.props;
    if (this.value !== defaultOption) {
      return null;
    }
    return children;
  };

  render() {
    const { label } = this.props;

    return (
      <div className={this.className}>
        {label && <div className="pbg-desktop-label-normal">{label}</div>}
        <div className="pbg-stored-value-selector-container">
          {this.renderPicker()}
          {this.renderAddNewButton()}
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}

export default StoredValueSelector;
