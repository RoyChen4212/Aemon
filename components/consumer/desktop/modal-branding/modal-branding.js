import React from 'react';

import powerByLogo from '../img/pbg-powered-by-logo.svg';
import Divider from '../divider';

import './style.css';

class ModalBranding extends React.PureComponent {
  baseClass = 'pbg-consumer-desktop pbg-modal-branding';

  renderFooter() {
    return (
      <div className="pbg-modal-branding-footer">
        <Divider />
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <div className={this.baseClass}>
        <div className="pbg-modal-branding-header">
          <div className="pbg-modal-branding-merchant-logo">
            <img src={this.props.logo} />
          </div>
          <div className="pbg-modal-branding-powered-by-logo">
            <span className="pbg-modal-branding-powered-by-text">
              powered by
            </span>
            <img src={powerByLogo} />
          </div>
        </div>
        {this.props.children ? this.renderFooter() : ''}
      </div>
    );
  }
}

export default ModalBranding;
