import React from 'react';

class StateProvider extends React.Component {
  state = {
    value: this.props.value || null,
    error: this.props.error || null,
  }

  onChange = (ev) => {
    this.setState({ value: ev.target.value }, this.runValidations);
    return this.props.onChange(ev);
  }

  runValidations = () => {
    let error;
    if (this.props.validate) {
      error = this.props.validate(this.state.value);
    }
    if (error) {
      this.setState({ error });
    }
  }

  get error() { return this.state.error; }

  render() {
    const Field = this.props.component;
    return (
      <React.Fragment>
        <Field
          {...this.props}
          value={this.state.value}
          onChange={this.onChange}
          onBlur={this.onChange}
          error={this.error}
        />
      </React.Fragment>
    )
  }
}

export default StateProvider;