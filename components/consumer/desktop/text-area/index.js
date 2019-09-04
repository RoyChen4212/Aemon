import React from 'react';
import PropTypes from 'prop-types';
import FormField from '../form-field';

import './style.scss';

class TextArea extends FormField {
  static propTypes = {
    name: PropTypes.string.isRequired,
    rows: PropTypes.number,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    simple: PropTypes.bool,
    hint: PropTypes.string,
    error: PropTypes.string,
  };

  static defaultProps = {
    rows: 3,
    onBlur: null,
    onChange: null,
    onFocus: null,
    value: null,
    label: null,
    placeholder: null,
    hint: null,
    error: null,
    disabled: false,
    simple: false,
  };

  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-area';
  dragged = false;
  mouseStartPosY = 0;
  textAreaStartHeight = 0;

  constructor(props) {
    super(props);

    this.textAreaRef = React.createRef();

    this.state = {
      textAreaHeight: 'initial',
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove = e => {
    if (!this.dragged) {
      return;
    }
    const heightDiff = this.mouseStartPosY - e.pageY;
    const newHeight = this.textAreaStartHeight - heightDiff;
    this.setState({ textAreaHeight: newHeight });
  };

  onMouseDown = e => {
    this.dragged = true;
    this.mouseStartPosY = e.pageY;
    this.textAreaStartHeight = this.textAreaRef.current.getBoundingClientRect().height;
  };

  onMouseUp = () => {
    this.dragged = false;
  };

  onFocus = e => {
    const { onFocus } = this.props;

    if (typeof onFocus === 'function') {
      onFocus(e);
    }
  };

  onBlur = e => {
    const { onBlur } = this.props;

    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  render() {
    const { rows, onChange, name, value, label, placeholder, disabled } = this.props;

    const { textAreaHeight } = this.state;
    return (
      <div className={this.className}>
        {this.renderLabel()}
        <div className="pbg-text-area-wrapper">
          <textarea
            rows={rows}
            onBlur={this.onBlur}
            onChange={onChange}
            onFocus={this.onFocus}
            name={name}
            value={value}
            placeholder={placeholder || label}
            disabled={disabled}
            style={{ height: textAreaHeight }}
            ref={this.textAreaRef}
          />
          {!disabled && (
            <div className="pbg-text-area-handle" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} />
          )}
        </div>
        {this.renderHintOrError()}
      </div>
    );
  }
}

export default TextArea;
