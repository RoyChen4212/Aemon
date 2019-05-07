import React from 'react';
import './style.css';

export default class ModalAlert extends React.PureComponent {
  baseClass = 'pbg-consumer-desktop pbg-modal-alert';

  state = {
    hide: false,
  }

  get error() { return this.props.error || false; }
  get warning() { return this.props.warning || false; }
  get success() { return this.props.success || false; }
  get animate() { return this.props.animate || false; }
  get hideAfter() { return this.props.hideAfter || 9000; }
  get hide() { return this.state.hide; }
  get show() { return this.animate && !this.hide; }

  componentDidMount() {
    if (this.animate) {
      setTimeout(() => {
        this.setState({ hide: true });
      }, this.hideAfter);
    }
  }

  get text() {
    if (this.props.text && this.props.text.label) {
      return <a onClick={this.props.text.action}>{this.props.text.label}</a>;
    }
    return this.props.text;
  }

  className() {
    let base = this.show ? this.baseClass + ' pbg-scale-up-ver-bottom' : this.baseClass;
    if (this.animate && this.hide) base += ' pbg-scale-down-ver-bottom';
    if (this.error) return base + ' pbg-modal-alert-error';
    if (this.warning) return base + ' pbg-modal-alert-warning';
    if (this.success) return base + ' pbg-modal-alert-success';
    return base;
  }


  render() {
    return (
      <div className={this.className()}>
      <span className="pbg-modal-alert-title">{this.props.title}</span>
      <span className="pbg-modal-alert-text">{this.text}</span>
    </div>
    )
  }
}