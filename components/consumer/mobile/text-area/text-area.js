import React from 'react';
import { TextField } from '../text-field';
import Hint, { hintTypes } from '../hint';
import './style.css';

class TextArea extends TextField {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-text-field pbg-text-area';

  el = React.createRef();

  state = {
    style: {
      height: 'auto',
    },
  }

  resetHeight() {
    this.setState({
      style: {
        height: 'auto',
      }
    }, () => {
      this.setState({
        style: {
          height: `${this.el.current.scrollHeight}px`,
        }
      });
    });
  }

  onTextChange = (value) => {
    this.onChange(value);
    this.resetHeight();
  }

  get input() {
    return (
      <textarea
        rows={1}
        ref={this.el}
        onBlur={this.onBlur}
        onChange={this.onTextChange}
        onFocus={this.onFocus}
        name={this.adaptedProps.name}
        value={this.adaptedProps.value}
        placeholder={this.placeholder}
        style={this.state.style}
      />
    );
  }

}

export { TextArea };
