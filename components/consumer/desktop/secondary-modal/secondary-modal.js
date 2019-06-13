import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal';

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

  render() {
    return (
      <Modal className="pbg-secondary-modal" onClose={this.props.onClose}>
        <div className="pbg-modal-content">
          <div className="pbg-modal-header">
            {this.props.iconType && (
              <i
                className={`pbg-modal-icon pbg-icon-${this.props.iconType}-big`}
              />
            )}
            {this.props.title && <h2 className="pbg-consumer-desktop pbg-desktop-heading-2">{this.props.title}</h2>}
          </div>
          {this.props.children}
        </div>
      </Modal>
    );
  }
}

export default SecondaryModal;
