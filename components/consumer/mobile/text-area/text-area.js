import React from 'react';
import { TextField } from '../text-field';
import Hint, { hintTypes } from '../hint';
import './style.css';

class TextArea extends TextField {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-text-field pbg-text-area';

  get rows() {
    const { value, focused } = this.adaptedProps;
    if (value && value.length > 100) return 3;
    return focused ? 3 : 1;
  }

  get input() {
    return (
      <textarea
        rows={this.rows}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        name={this.adaptedProps.name}
        value={this.adaptedProps.value}
        placeholder={this.placeholder}
      />
    );
  }

}

export { TextArea };
