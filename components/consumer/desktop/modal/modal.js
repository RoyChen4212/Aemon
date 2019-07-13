import React from 'react';
import PropTypes from 'prop-types';

import Container from '../container';
import ModalAlertStack from '../modal-alert-stack';

import './style.scss';

class Modal extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    onHideAlert: PropTypes.func,
    children: PropTypes.node,
    alerts: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    className: '',
    onClose: null,
    onHideAlert: null,
    children: null,
    alerts: [],
  };

  onCloseClick = () => {
    const { onClose } = this.props;
    if (onClose) onClose();
  };

  renderModalAlertStack() {
    const { alerts, onHideAlert } = this.props;
    return <ModalAlertStack alerts={alerts} onHideAlert={onHideAlert} />;
  }

  renderModalCloseButton() {
    const { onClose } = this.props;
    if (!onClose) return null;
    return <button type="button" className="pbg-modal-close-button" onClick={this.onCloseClick} />;
  }

  renderOverlay() {
    const { onClose } = this.props;
    if (!onClose) return null;
    return <div className="pbg-modal-overlay" onClick={this.onCloseClick} />;
  }

  render() {
    const { className, children, onClose } = this.props;
    return (
      <div className={`pbg-consumer-desktop pbg-modal${onClose ? ' pbg-modal-with-overlay' : ''} ${className}`}>
        <div className="pbg-modal-dialog">
          {this.renderModalAlertStack()}
          <Container solid shadow2>
            {children}
            {this.renderModalCloseButton()}
          </Container>
        </div>

        {this.renderOverlay()}
      </div>
    );
  }
}

export default Modal;
