import React from 'react';
import PropTypes from 'prop-types';

import Container from '../container';
import { H2 } from '../heading';

import './style.css';

class SecondaryModal extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    iconType: PropTypes.string,
    children: PropTypes.node,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    title: null,
    iconType: null,
    children: null,
    onClose: null,
  };

  get icon() {
    if (!this.props.iconType) return null;
    return (
      <i className={`pbg-modal-icon pbg-icon-${this.props.iconType}-big`} />
    );
  }

  get title() {
    return this.props.title && <H2>{this.props.title}</H2>;
  }

  onCloseClick = () => {
    if (this.props.onClose) this.props.onClose();
  };

  render() {
    return (
      <div className="pbg-consumer-desktop pbg-modal pbg-secondary-modal">
        <div className="pbg-modal-dialog">
          <Container solid shadow2>
            <div className="pbg-modal-content">
              <div className="pbg-modal-header">
                {this.icon}
                {this.title}
              </div>
              {this.props.children}
            </div>
            <button
              type="button"
              className="pbg-modal-close-button"
              onClick={this.onCloseClick}
            />
          </Container>
        </div>
        <div className="pbg-modal-overlay" onClick={this.onCloseClick} />
      </div>
    );
  }
}

export default SecondaryModal;
