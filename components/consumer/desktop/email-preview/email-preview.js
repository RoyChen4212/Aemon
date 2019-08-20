import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import truncate from 'lodash/truncate';

import './style.scss';

class EmailPreview extends Component {
  baseClass = 'pbg-consumer-desktop pbg-email-preview';

  static propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    borderColor: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    borderColor: null,
    className: null,
    content: '',
  };

  render() {
    const { borderColor, logo, title, content, className } = this.props;
    const borderStyle = { borderTopColor: borderColor };
    return (
      <div className={cx(this.baseClass, className)}>
        <div className="pbg-email-preview-envelope-back" />
        <div className="pbg-email-preview-inner" style={borderStyle}>
          <div className="pbg-email-preview-merchant-logo">
            <img src={logo} />
          </div>
          <div className="pbg-email-preview-content">
            <h5>{truncate(title, { length: 43 })}</h5>
            <p>{content}</p>
          </div>
        </div>
        <div className="pbg-email-preview-envelope-front" />
      </div>
    );
  }
}

export default EmailPreview;
