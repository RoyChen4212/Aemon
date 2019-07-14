import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../divider';

import './style.scss';

class ModalBranding extends React.PureComponent {
  baseClass = 'pbg-consumer-desktop pbg-modal-branding';

  static propTypes = {
    logo: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  renderFooter() {
    const { children } = this.props;
    return (
      <div className="pbg-modal-branding-footer">
        <Divider />
        <div className="pbg-modal-branding-footer-content">{children}</div>
      </div>
    );
  }

  render() {
    const { logo, children } = this.props;
    return (
      <div className={this.baseClass}>
        <div className="pbg-modal-branding-header">
          <div className="pbg-modal-branding-merchant-logo">
            <img src={logo} />
          </div>
          <div className="pbg-modal-branding-powered-by-logo">
            <span>powered by</span>
            <i className="pbg-logo-powered-by" />
          </div>
        </div>
        {children ? this.renderFooter() : ''}
      </div>
    );
  }
}

export default ModalBranding;
