import React from 'react';
import { TextField } from '../text-field';
import Hint, { hintTypes } from '../hint';
import './style.css';

class TextArea extends TextField {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-text-field pbg-text-area';

  ref = React.createRef();

  state = {
    style: {
      height: 'auto',
    },
  }

  onTextChange = (value) => {
    this.onChange(value);
    setTimeout(() => {
      this.setState({
        style: {
          height: `${this.ref.current.scrollHeight}px`,
        }
      });
    },0);
  }

  get input() {
    return (
      <textarea
        rows={1}
        ref={this.ref}
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
