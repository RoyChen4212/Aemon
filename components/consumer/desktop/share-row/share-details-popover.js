import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../divider';

import './style.scss';

class ShareDetailsPopover extends React.Component {
  baseClassName = 'pbg-consumer-desktop pbg-share-details-popover';

  static propTypes = {
    title: PropTypes.string,
    descriptionLabel: PropTypes.string,
    maxAmountLabel: PropTypes.string,
    shareLabel: PropTypes.string,
    feeLabel: PropTypes.string,
    totalLabel: PropTypes.string,
    share: PropTypes.string.isRequired,
    fee: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: 'Share details',
    descriptionLabel: 'Description',
    maxAmountLabel: 'Max amount',
    shareLabel: 'X shares',
    feeLabel: 'Transaction fee',
    totalLabel: 'Total',
  };

  render() {
    const { title, descriptionLabel, maxAmountLabel, shareLabel, feeLabel, totalLabel, share, fee, total } = this.props;

    return (
      <div className={this.baseClassName}>
        <div className="pbg-desktop-heading-3">{title}</div>
        <div className="pbg-share-details-popover-content">
          <div className="pbg-share-details-popover-row">
            <div className="pbg-desktop-secondary-text pbg-desktop-small-text">{descriptionLabel}</div>
            <div className="pbg-desktop-regular-text">{shareLabel}</div>
            <div className="pbg-desktop-regular-text">{feeLabel}</div>
          </div>
          <div className="pbg-share-details-popover-row">
            <div className="pbg-desktop-secondary-text pbg-desktop-small-text">{maxAmountLabel}</div>
            <div className="pbg-desktop-regular-text">{share}</div>
            <div className="pbg-desktop-regular-text">{fee}</div>
          </div>
        </div>
        <Divider />
        <div className="pbg-share-details-popover-total">
          <div className="pbg-desktop-regular-text">{totalLabel}</div>
          <div className="pbg-desktop-regular-text">{total}</div>
        </div>
      </div>
    );
  }
}

export default ShareDetailsPopover;
