import React from 'react';

import Label, { types as labelTypes } from '../label';
import Hint, { types as hintTypes } from '../hint';

import './style.scss';

class Picker extends React.Component {
  baseClassName = 'pbg-form-field pbg-picker';

  get className() {
    let resultingClassName = this.baseClassName;

    if (this.error) {
      resultingClassName += ' pbg-form-field-error';
    }

    return resultingClassName;
  }

  get label() {
    return (
      <Label required={this.props.required}>{this.props.label}</Label>
    )
  }

  get select() {
    const { options = [] } = this.props;
    return (
      <select onChange={this.props.onChange}>
        {
          options.map(({ label, value }, i) => (
            <option value={value} key={`option-${i}`}>{label}</option>
          ))
        }
      </select>
    );
  }

  get error() { return this.props.error; }

  get hint() { return this.props.hint; }

  get hintOrError() {
    if (this.error) return <div><Hint type={hintTypes.ERROR}>{this.error}</Hint></div>;
    if (this.hint) return <div><Hint>{this.hint}</Hint></div>;
    return null;
  }

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-picker-select-container">
          {this.label}
          {this.select}
          <i className="pbg-picker-arrow" />
        </div>
        {this.hintOrError}
      </div>
    );
  }
};

export { Picker };
