import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../text-field';

import './style.scss';

/** @extends React.Component */
class TextArea extends TextField {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-text-field pbg-text-area';

  el = React.createRef();

  state = {
    style: {
      height: 'auto',
    },
  };

  static propTypes = {
    rows: PropTypes.number,
  };

  static defaultProps = {
    rows: 3,
  };

  get value() {
    return this.adaptedProps.value || '';
  }

  get textAreaPlaceholder() {
    if (this.focused) return null;
    return this.adaptedProps.placeholder;
  }

  resetHeight() {
    this.setState({ style: { height: 'auto' } }, () => {
      this.setState({ style: { height: `${this.el.current.scrollHeight + 2}px` } });
    });
  }

  onTextChange = value => {
    this.onChange(value);
    this.resetHeight();
  };

  renderInput() {
    const { rows } = this.props;
    const { style } = this.state;

    return (
      <textarea
        rows={rows}
        ref={this.el}
        onBlur={this.onBlur}
        onChange={this.onTextChange}
        onFocus={this.onFocus}
        name={this.adaptedProps.name}
        value={this.value}
        placeholder={this.textAreaPlaceholder}
        style={style}
        disabled={this.adaptedProps.disabled}
      />
    );
  }
}

export default TextArea;
