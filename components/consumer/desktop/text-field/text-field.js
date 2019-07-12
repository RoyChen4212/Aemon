import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../form-field';
import { labelTypes } from '../label';

import './style.scss';

/** @extends React.Component */
class TextField extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-field';

  baseType = 'text';

  static propTypes = {
    icon: PropTypes.string,
    onIconClick: PropTypes.func,
  };

  static defaultProps = {
    icon: null,
    onIconClick: () => {},
  };

  get labelType() {
    if (this.error) return labelTypes.ERROR;
    return labelTypes.base;
  }

  get type() {
    return this.adaptedProps.type || this.baseType;
  }

  get value() {
    return this.adaptedProps.value || '';
  }

  renderInput() {
    return (
      <input
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        name={this.adaptedProps.name}
        value={this.value}
        placeholder={this.placeholder}
        pattern={this.adaptedProps.pattern}
        type={this.type}
        disabled={this.adaptedProps.disabled}
      />
    );
  }

  renderIcon() {
    const { icon, onIconClick } = this.props;

    if (!icon) return null;

    return (
      <div className="pbg-text-field-icon" onClick={onIconClick}>
        <img src={icon} />
      </div>
    );
  }

  render() {
    return (
      <div className={this.className}>
        {this.renderLabel()}
        {this.renderInput()}
        {this.renderIcon()}
        {this.renderHintOrError()}
      </div>
    );
  }
}

export default TextField;
