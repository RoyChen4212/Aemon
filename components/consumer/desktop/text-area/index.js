import React from 'react';
import FormField from '../form-field';

import './style.scss';

class TextArea extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-area';

  baseType = 'text';

  get rows() {
    return this.props.rows || 3;
  }

  get value() {
    return this.adaptedProps.value || '';
  }

  renderInput() {
    return (
      <textarea
        rows={this.rows}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        name={this.adaptedProps.name}
        value={this.value}
        placeholder={this.placeholder}
        disabled={this.adaptedProps.disabled}
      />
    );
  }

  render() {
    return (
      <div className={this.className}>
        {this.renderInput()}
        {!this.props.simple && this.renderHintOrError()}
      </div>
    );
  }
}

export default TextArea;
