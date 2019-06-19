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
    if (this.props.onClose) this.props.onClose();
  };

  renderModalAlertStack() {
    return (
      <ModalAlertStack
        alerts={this.props.alerts}
        onHideAlert={this.props.onHideAlert}
      />
    );
  }

  render() {
    return (
      <div className={`pbg-consumer-desktop pbg-modal ${this.props.className}`}>
        <div className="pbg-modal-dialog">
          {this.renderModalAlertStack()}

          <Container solid shadow2>
            {this.props.children}

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

export default Modal;
