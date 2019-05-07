import React from 'react';
import Container from '../container';
import ModalAlert from '../modal-alert';

import './style.css';

class PrimaryModal extends React.PureComponent {
  onBackClick = () => {
    if (this.props.onBackClick) return this.props.onBackClick();
  }

  get alerts() {
    return this.props.alerts || [];
  }

  renderMainContent() {
    return this._renderColumn('pbg-primary-modal-main-content', this.props.mainContent);
  }

  renderModalAlerts() {
    if (this.alerts.length) {
      return (
        <div className="pbg-modal-alerts">
          { this.alerts.map(this._renderAlert) }
        </div>
      )
    }
  }

  renderSidebarContent() {
    return this._renderColumn('pbg-primary-modal-sidebar-content', this.props.sidebarContent);
  }

  _renderAlert = (alert) => {
    return (
      <ModalAlert
        error={alert.type === 'error'}
        warning={alert.type === 'warning'}
        success={alert.type === 'success'} 
        title={alert.title}
        text={alert.text}
      />
    );
  }

  _renderColumn(name, content) {
    return (
      <div className={`${name} pbg-primary-modal-col`}>
        {content}
      </div>
    );
  }

  render() {
    return (
      <div className="pbg-consumer-desktop pbg-modal pbg-primary-modal">
        <div className="pbg-modal-dialog">
          { this.renderModalAlerts() }
          <Container solid shadow2>
            { this.renderMainContent() }
            { this.renderSidebarContent() }
            <button type="button" className="pbg-modal-close-button" onClick={this.onBackClick}/>
          </Container>
        </div>
        <div className="pbg-modal-overlay" onClick={this.onBackClick} />
      </div>
    );
  }
};

export default PrimaryModal;