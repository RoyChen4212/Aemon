import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import copy from 'copy-to-clipboard';

import './style.scss';

const baseClassName = 'pbg-consumer-desktop pbg-share-link';

class ShareLink extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    onClick: null,
  };

  onClick = e => {
    const { href, onClick } = this.props;
    copy(href);

    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  render() {
    const { label, className } = this.props;
    return (
      <div className={cx(baseClassName, className)} onClick={this.onClick}>
        <span className="pbg-desktop-label-link">{label}</span>
      </div>
    );
  }
}

export default ShareLink;
