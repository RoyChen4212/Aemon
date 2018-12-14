import React from 'react';

class StateProvider extends React.Component {
  state = {
    value: this.props.value || null,
  }

  onChange = (ev) => {
    this.setState({ value: ev.target.value });
    return this.props.onChange(ev);
  }

  render() {
    const Field = this.props.component;
    return (
      <React.Fragment>
        <Field
          {...this.props}
          value={this.state.value}
          onChange={this.onChange}
        />
      </React.Fragment>
    )
  }
}

export default StateProvider;