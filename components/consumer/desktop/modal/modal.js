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

  render() {
    const { className, children } = this.props;
    return (
      <div className={`pbg-consumer-desktop pbg-modal ${className}`}>
        <div className="pbg-modal-dialog">
          {this.renderModalAlertStack()}

          <Container solid shadow2>
            {children}
            <button type="button" className="pbg-modal-close-button" onClick={this.onCloseClick} />
          </Container>
        </div>

        <div className="pbg-modal-overlay" onClick={this.onCloseClick} />
      </div>
    );
  }
}

export default Modal;
