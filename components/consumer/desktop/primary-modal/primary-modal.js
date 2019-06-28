import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../divider';
import Modal from '../modal';

import './style.scss';

class PrimaryModal extends React.PureComponent {
  static propTypes = {
    mainContent: PropTypes.node,
    sidebarContent: PropTypes.node,
    footerContent: PropTypes.node,
    onClose: PropTypes.func,
    onHideAlert: PropTypes.func,
    alerts: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    mainContent: null,
    sidebarContent: null,
    footerContent: null,
    onClose: null,
    onHideAlert: null,
    alerts: [],
  };

  render() {
    const { onClose, alerts, onHideAlert, mainContent, footerContent, sidebarContent } = this.props;
    return (
      <Modal className="pbg-primary-modal" onClose={onClose} alerts={alerts} onHideAlert={onHideAlert}>
        <div className="pbg-primary-modal-content">
          <div className="pbg-primary-modal-main-container">
            <div className="pbg-primary-modal-main-content">{mainContent}</div>
            {footerContent && (
              <div>
                <Divider />
                <div className="pbg-primary-modal-footer-content">{footerContent}</div>
              </div>
            )}
          </div>
          <div className="pbg-primary-modal-sidebar-content">{sidebarContent}</div>
        </div>
      </Modal>
    );
  }
}

export default PrimaryModal;
