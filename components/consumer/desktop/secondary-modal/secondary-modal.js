import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal';

import './style.scss';

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
    const { onClose, iconType, title, children } = this.props;
    return (
      <Modal className="pbg-secondary-modal" onClose={onClose}>
        <div className="pbg-modal-content">
          <div className="pbg-modal-header">
            {iconType && <i className={`pbg-modal-icon pbg-icon-${iconType}-big`} />}
            {title && <h2 className="pbg-consumer-desktop pbg-desktop-heading-2">{title}</h2>}
          </div>
          {children}
        </div>
      </Modal>
    );
  }
}

export default SecondaryModal;
