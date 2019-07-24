import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import find from 'lodash/find';
import get from 'lodash/get';

import { labelTypes } from '../label';
import FormField from '../form-field';
import PickerMenu from '../picker-menu';
import makeEvent from '../../../lib/make-event';

import './style.scss';

export const PICKER_EMPTY_VALUE = '__EmptyValue';

/** @extends React.Component */
class Picker extends FormField {
  baseClassName = classnames('pbg-consumer-desktop', 'pbg-form-field', 'pbg-picker', {
    'pbg-picker-big': this.adaptedProps.big,
  });

  state = {
    active: false,
  };

  get labelType() {
    if (this.adaptedProps.error) return labelTypes.ERROR;
    return labelTypes.base;
  }

  get labelText() {
    const opt = find(this.options, op => op.value === this.value);
    return opt ? opt.label.term : null;
  }

  get options() {
    return get(this.adaptedProps, 'options', []);
  }

  get value() {
    return this.adaptedProps.value === null ? PICKER_EMPTY_VALUE : this.adaptedProps.value;
  }

  onOptionClick = value => () => {
    const val = value === PICKER_EMPTY_VALUE ? null : value;
    clearTimeout(this.deactivateTimeout);
    this.onChange(makeEvent(val));
    this.onButtonBlur();
  };

  onButtonClick = () => {
    if (this.disabled) return;
    this.setState({ active: true });
  };

  onButtonBlur = (ev, callback) => {
    if (this.disabled) return false;
    this.deactivateTimeout = setTimeout(() => {
      this.setState({ active: false }, () => callback && callback(makeEvent(this.value)));
    }, 150);
    return true;
  };

  renderPickerButton() {
    const { button } = this.props;
    const style = button ? 'pbg-picker-button' : 'pbg-picker-text';
    return (
      <button
        className={style}
        type="button"
        onFocus={this.onFocus}
        onClick={this.onButtonClick}
        onBlur={ev => this.onButtonBlur(ev, this.onBlur)}
      >
        <span>{this.labelText}</span>
        <i className="pbg-picker-arrow" />
      </button>
    );
  }

  render() {
    const { button } = this.props;
    const { active } = this.state;
    return (
      <div className={this.className}>
        {this.renderLabel()}
        <div className="pbg-picker-container">
          {this.renderPickerButton()}
          <PickerMenu
            options={this.options}
            active={active}
            selected={this.value}
            onOptionClick={this.onOptionClick}
            onBlur={ev => this.onButtonBlur(ev, this.onBlur)}
            fullWidth={!button}
          />
        </div>
        {this.renderHintOrError()}
      </div>
    );
  }
}

Picker.propTypes = {
  button: PropTypes.bool,
};

Picker.defaultProps = {
  button: false,
};

export default Picker;
