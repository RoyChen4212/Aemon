import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal';

import './style.css';

class PrimaryModal extends React.PureComponent {
  static propTypes = {
    mainContent: PropTypes.node,
    sidebarContent: PropTypes.node,
    onClose: PropTypes.func,
    onHideAlert: PropTypes.func,
    alerts: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    mainContent: null,
    sidebarContent: null,
    onClose: null,
    onHideAlert: null,
    alerts: [],
  };

  render() {
    return (
      <Modal
        className="pbg-primary-modal"
        onClose={this.props.onClose}
        alerts={this.props.alerts}
        onHideAlert={this.props.onHideAlert}
      >
        <div className="pbg-primary-modal-main-content pbg-primary-modal-col">
          {this.props.mainContent}
        </div>
        <div className="pbg-primary-modal-sidebar-content pbg-primary-modal-col">
          {this.props.sidebarContent}
        </div>
      </Modal>
    );
  }
}

export default PrimaryModal;
