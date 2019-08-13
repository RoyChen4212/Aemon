import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class ShareLink extends PureComponent {
  static baseClassName = 'pbg-consumer-mobile pbg-share-link';

  onClick = e => {
    let range;
    let selection;

    if (window.getSelection && document.createRange) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(e.target);
      selection.removeAllRanges();
      selection.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(e.target);
      range.select();
    }
    e.target.select();
  };

  render() {
    const { label } = this.props;
    return (
      <div className={ShareLink.baseClassName}>
        <span className="pbg-icon-link-small-gray" />
        <span className="pbg-mobile-label-normal" onClick={this.onClick}>
          {label}
        </span>
      </div>
    );
  }
}

ShareLink.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ShareLink;
