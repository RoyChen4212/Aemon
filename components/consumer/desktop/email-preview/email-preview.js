import React, { Component } from 'react';
import PropTypes from 'prop-types';
import truncate from 'lodash/truncate';

import './style.scss';

class EmailPreview extends Component {
  baseClass = 'pbg-consumer-desktop pbg-email-preview';

  static propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    borderColor: PropTypes.string,
  };

  static defaultProps = {
    borderColor: null,
    content: '',
  };

  render() {
    const borderStyle = { borderTopColor: this.props.borderColor };
    return (
      <div className={this.baseClass}>
        <div className="pbg-email-preview-envelope-back" />
        <div className="pbg-email-preview-inner" style={borderStyle}>
          <div className="pbg-email-preview-merchant-logo">
            <img src={this.props.logo} />
          </div>
          <div className="pbg-email-preview-content">
            <h5>{truncate(this.props.title, { length: 43 })}</h5>
            <p>{this.props.content}</p>
          </div>
        </div>
        <div className="pbg-email-preview-envelope-front" />
      </div>
    );
  }
}

export default EmailPreview;
