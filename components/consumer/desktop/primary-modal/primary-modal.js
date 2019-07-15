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
    form: PropTypes.bool,
    formProps: PropTypes.object,
    onClose: PropTypes.func,
    onHideAlert: PropTypes.func,
    alerts: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    mainContent: null,
    sidebarContent: null,
    footerContent: null,
    form: false,
    formProps: {},
    onClose: null,
    onHideAlert: null,
    alerts: [],
  };

  renderContent() {
    const { mainContent } = this.props;
    return [
      <div key="main" className="pbg-primary-modal-main-content">
        {mainContent}
      </div>,
      this.renderFooter(),
    ];
  }

  renderFooter() {
    const { footerContent } = this.props;
    if (!footerContent) return null;
    return (
      <div>
        <Divider />
        <div className="pbg-primary-modal-footer-content">{footerContent}</div>
      </div>
    );
  }

  render() {
    const { sidebarContent, form, formProps, onClose, alerts, onHideAlert } = this.props;

    return (
      <Modal className="pbg-primary-modal" onClose={onClose} alerts={alerts} onHideAlert={onHideAlert}>
        <div className="pbg-primary-modal-content">
          {form && (
            <form className="pbg-primary-modal-main-container" {...formProps}>
              {this.renderContent()}
            </form>
          )}
          {!form && <div className="pbg-primary-modal-main-container">{this.renderContent()}</div>}
          <div className="pbg-primary-modal-sidebar-content">{sidebarContent}</div>
        </div>
      </Modal>
    );
  }
}

export default PrimaryModal;
