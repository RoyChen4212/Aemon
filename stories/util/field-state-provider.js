import React from 'react';

class StateProvider extends React.Component {
  state = {
    value: this.props.value || null,
    error: this.props.error || null,
    focused: false,
  };

  onChange = ev => {
    this.setState({ value: ev.target.value }, this.runValidations);
    if (this.props.onChange) return this.props.onChange(ev);
  };

  onBlur = ev => {
    this.setState(
      { value: ev.target.value, focused: false },
      this.runValidations
    );
    if (this.props.onBlur) return this.props.onBlur(ev);
  };

  onFocus = () => this.setState({ focused: true });

  runValidations = () => {
    let error;
    if (this.props.validate) {
      error = this.props.validate(this.state.value);
    }
    if (error) {
      this.setState({ error });
    }
  };

  get error() {
    return this.state.error;
  }

  render() {
    const Field = this.props.component;
    return (
      <React.Fragment>
        <Field
          {...this.props}
          focused={this.state.focused}
          value={this.state.value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          error={this.error}
        />
      </React.Fragment>
    );
  }
}

export default StateProvider;
