import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../divider';

import './style.scss';

class ShareDetailsOverlay extends React.Component {
  baseClassName = 'pbg-consumer-mobile pbg-share-details-overlay';

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
        <div className="pbg-mobile-heading-1">{title}</div>
        <div className="pbg-share-details-overlay-row">
          <div className="pbg-mobile-label-secondary">{descriptionLabel}</div>
          <div className="pbg-mobile-label-secondary">{maxAmountLabel}</div>
        </div>
        <Divider />
        <div className="pbg-share-details-overlay-row">
          <div className="pbg-mobile-label-normal">{shareLabel}</div>
          <div className="pbg-mobile-label-normal">{share}</div>
        </div>
        <Divider />
        <div className="pbg-share-details-overlay-row">
          <div className="pbg-mobile-label-normal">{feeLabel}</div>
          <div className="pbg-mobile-label-normal">{fee}</div>
        </div>
        <Divider />
        <div className="pbg-share-details-overlay-row">
          <div className="pbg-mobile-label-secondary">{totalLabel}</div>
          <div className="pbg-mobile-label-normal">{total}</div>
        </div>
      </div>
    );
  }
}

export default ShareDetailsOverlay;
