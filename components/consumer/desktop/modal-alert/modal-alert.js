import React from 'react';
import Label, { labelTypes } from '../label';
import './style.css';

export default class ModalAlert extends React.PureComponent {
  baseClass = 'pbg-consumer-desktop pbg-modal-alert';
  state = {
    hide: false,
  }

  componentDidMount() {
    if (this.props.hideAfter) {
      setTimeout(() => this.setState({ hide: true }), this.props.hideAfter);
    }
  }

  get error() { return this.props.error || false; }
  get warning() { return this.props.warning || false; }
  get success() { return this.props.success || false; }
  get hide() { return this.state.hide; }

  get text() {
    if (this.props.text && this.props.text.label) {
      return <a onClick={this.props.text.action}>{this.props.text.label}</a>;
    }
    return this.props.text;
  }

  className() {
    const base = this.hide ? this.baseClass + ' pbg-fade-out' : this.baseClass;
    if (this.error) return base + ' pbg-modal-alert-error';
    if (this.warning) return base + ' pbg-modal-alert-warning';
    if (this.success) return base + ' pbg-modal-alert-success';
    return base;
  }


  render() {
    return (
      <div className={this.className()}>
      <Label className="pbg-modal-alert-title" type={labelTypes.STRONG}>{this.props.title}</Label>
      <Label className="pbg-modal-alert-text">{this.text}</Label>
    </div>
    )
  }
}