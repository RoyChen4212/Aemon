import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../form-field';

import './style.scss';

/** @extends React.Component */
class ShareRow extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-share-row';

  static propTypes = {
    label: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    detailsText: PropTypes.string,
    detailsContent: PropTypes.node,
  };

  static defaultProps = {
    detailsText: null,
    detailsContent: null,
  };

  state = {
    isDetailHidden: true,
  };

  renderAmount = () => {
    const { amount, detailsText, detailsContent } = this.props;
    const { isDetailHidden } = this.state;

    return (
      <div className="pbg-share-row-amount-wrapper">
        <div className="pbg-desktop-label-strong">{amount}</div>
        {detailsText && (
          <button type="button" className="pbg-button pbg-consumer-desktop" onClick={this.onDetailClick}>
            <span>{detailsText}</span>
          </button>
        )}
        {!isDetailHidden && detailsContent}
      </div>
    );
  };

  render() {
    const { label, hint, color } = this.props;

    const borderStyle = { borderColor: color };

    return (
      <div className={this.className} style={borderStyle}>
        <div className="pbg-desktop-label-normal">{label}</div>
        <div className="pbg-desktop-secondary-text pbg-desktop-small-text">{hint}</div>
        {this.renderAmount()}
      </div>
    );
  }
}

export default ShareRow;
