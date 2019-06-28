import React from 'react';

class StateProvider extends React.Component {
  state = {
    value: this.props.value || null, // eslint-disable-line react/destructuring-assignment
    error: this.props.error || null, // eslint-disable-line react/destructuring-assignment
    focused: false,
  };

  onChange = ev => {
    const { onChange } = this.props;
    this.setState({ value: ev.target.value }, this.runValidations);
    if (onChange) return onChange(ev);
  };

  onBlur = ev => {
    const { onBlur } = this.props;
    this.setState({ value: ev.target.value, focused: false }, this.runValidations);
    if (onBlur) return onBlur(ev);
  };

  onFocus = () => this.setState({ focused: true });

  runValidations = () => {
    const { validate } = this.props;
    const { value } = this.state;
    let error;
    if (validate) {
      error = validate(value);
    }
    if (error) {
      this.setState({ error });
    }
  };

  get error() {
    const { error } = this.state;
    return error;
  }

  render() {
    const { component: Field } = this.props;
    const { focused, value } = this.state;
    return (
      <React.Fragment>
        <Field
          {...this.props}
          focused={focused}
          value={value}
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
