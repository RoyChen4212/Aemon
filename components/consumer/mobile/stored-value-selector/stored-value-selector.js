import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import FormField from '../form-field';
import makeEvent from '../../../lib/make-event';
import Picker from '../picker';
import { SmallButton } from '../button';

import './style.scss';

/** @extends React.Component */
class StoredValueSelector extends FormField {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-stored-value-selector';

  static propTypes = {
    label: PropTypes.string,
    picker: PropTypes.elementType,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // eslint-disable-line react/no-unused-prop-types
    children: PropTypes.node,
    options: PropTypes.arrayOf(PropTypes.object),
    defaultOption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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

  updateValue = value => {
    this.onChange(makeEvent(value));
  };

  renderLabel() {
    const { label } = this.props;
    if (!label) return null;
    return <div className="pbg-mobile-label-normal">{label}</div>;
  }

  renderPicker() {
    const { picker: PickerComponent, options } = this.props;

    if (options.length === 0) {
      return null;
    }
    return <PickerComponent options={options} value={this.value} onChange={ev => this.updateValue(ev.target.value)} />;
  }

  renderAddNewButton() {
    const { defaultOption, addNewText, options } = this.props;
    if (options.length === 0 || this.value === defaultOption) return null;
    return <SmallButton onClick={() => this.updateValue(defaultOption)}>{addNewText}</SmallButton>;
  }

  renderChildren() {
    const { defaultOption, children } = this.props;
    if (this.value !== defaultOption) return null;
    return children;
  }

  render() {
    return (
      <div className={this.className}>
        {this.renderLabel()}
        {this.renderHintOrError()}
        {this.renderPicker()}
        <div className="pbg-stored-value-selector-add">
          {this.renderAddNewButton()}
          {this.renderChildren()}
        </div>
      </div>
    );
  }
}

export default StoredValueSelector;
