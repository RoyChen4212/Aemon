import React from 'react';
import Label, { labelTypes } from '../label';

import './style.scss';

export default class ModalAlert extends React.PureComponent {
  baseClass = 'pbg-consumer-desktop pbg-modal-alert';

  state = {
    hide: false,
  };

  componentDidMount() {
    const { hideAfter } = this.props;
    if (hideAfter) {
      setTimeout(() => this.setState({ hide: true }), hideAfter);
    }
  }

  get error() {
    const { error } = this.props;
    return error || false;
  }

  get warning() {
    const { warning } = this.props;
    return warning || false;
  }

  get success() {
    const { success } = this.props;
    return success || false;
  }

  get hide() {
    const { hide } = this.state;
    return hide;
  }

  // TODO: rename props.text.action to onTextClick
  // TODO: rename props.text.label to text
  get text() {
    const { text } = this.props;
    if (text && text.label) {
      return <a onClick={text.action}>{text.label}</a>;
    }
    return text;
  }

  className() {
    const base = this.hide ? `${this.baseClass} pbg-fade-out` : this.baseClass;
    if (this.error) return `${base} pbg-modal-alert-error`;
    if (this.warning) return `${base} pbg-modal-alert-warning`;
    if (this.success) return `${base} pbg-modal-alert-success`;
    return base;
  }

  render() {
    const { title } = this.props;
    return (
      <div className={this.className()}>
        <Label className="pbg-modal-alert-title" type={labelTypes.STRONG}>
          {title}
        </Label>
        <Label className="pbg-modal-alert-text">{this.text}</Label>
      </div>
    );
  }
}
