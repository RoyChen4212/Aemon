import React from 'react';
import Container from '../container';
import ModalAlertStack from '../modal-alert-stack';

import './style.css';

class PrimaryModal extends React.PureComponent {
  onBackClick = () => {
    if (this.props.onBackClick) return this.props.onBackClick();
  };

  renderModalAlertStack() {
    return (
      <ModalAlertStack
        alerts={this.props.alerts}
        onHideAlert={this.props.onHideAlert}
      />
    );
  }

  renderMainContent() {
    return this._renderColumn(
      'pbg-primary-modal-main-content',
      this.props.mainContent
    );
  }

  renderSidebarContent() {
    return this._renderColumn(
      'pbg-primary-modal-sidebar-content',
      this.props.sidebarContent
    );
  }

  _renderColumn(name, content) {
    return <div className={`${name} pbg-primary-modal-col`}>{content}</div>;
  }

  render() {
    return (
      <div className="pbg-consumer-desktop pbg-modal pbg-primary-modal">
        <div className="pbg-modal-dialog">
          {this.renderModalAlertStack()}
          <Container solid shadow2>
            {this.renderMainContent()}
            {this.renderSidebarContent()}
            <button
              type="button"
              className="pbg-modal-close-button"
              onClick={this.onBackClick}
            />
          </Container>
        </div>
        <div className="pbg-modal-overlay" onClick={this.onBackClick} />
      </div>
    );
  }
}

export default PrimaryModal;
