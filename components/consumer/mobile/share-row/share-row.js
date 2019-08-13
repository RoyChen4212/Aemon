import React from 'react';
import PropTypes from 'prop-types';

import Overlay from '../overlay';
import { SmallButton } from '../button';
import colorCodes from '../../shared/scss/_styleguide.scss';

import './style.scss';

class ShareRow extends React.Component {
  baseClassName = 'pbg-consumer-mobile pbg-share-row';

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

  state = { overlayOpened: false };

  onDetailsClick = () => {
    this.setState({ overlayOpened: true });
  };

  onBackButtonClick = () => {
    this.setState({ overlayOpened: false });
  };

  renderDetailsButton = () => {
    const { detailsText, detailsContent } = this.props;
    if (!detailsContent || !detailsText) {
      return null;
    }

    return (
      <div className="pbg-share-row-details-wrapper">
        <SmallButton onClick={this.onDetailsClick}>{detailsText}</SmallButton>
      </div>
    );
  };

  renderDetailsContent = () => {
    const { detailsText, detailsContent } = this.props;
    const { overlayOpened } = this.state;
    if (!detailsContent || !detailsText) {
      return null;
    }

    return (
      <Overlay backText="back" opened={overlayOpened} onBackButtonClick={this.onBackButtonClick}>
        {detailsContent}
      </Overlay>
    );
  };

  render() {
    const { label, hint, color, amount } = this.props;

    const borderStyle = { borderColor: colorCodes[color] };

    return (
      <div className={this.baseClassName} style={borderStyle}>
        <div className="pbg-share-row-label-container">
          <div className="pbg-mobile-label-normal">{label}</div>
          <div className="pbg-mobile-label-secondary">{amount}</div>
        </div>
        <div className="pbg-mobile-small-normal">{hint}</div>
        {this.renderDetailsButton()}
        {this.renderDetailsContent()}
      </div>
    );
  }
}

export default ShareRow;
