import React from 'react';
import PropTypes from 'prop-types';

import Popover from '../popover';

import './style.scss';

/** @extends React.Component */
class ShareRow extends React.Component {
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

  renderAmount = () => {
    const { amount, detailsText, detailsContent } = this.props;

    return (
      <div className="pbg-share-row-amount-wrapper">
        <div className="pbg-desktop-label-strong">{amount}</div>
        {detailsContent && (
          <Popover
            trigger={props => (
              <div className="pbg-desktop-small-link" onClick={props.onClick}>
                {detailsText}
              </div>
            )}
            content={detailsContent}
          />
        )}
      </div>
    );
  };

  render() {
    const { label, hint, color } = this.props;

    const borderStyle = { borderColor: color };

    return (
      <div className="pbg-consumer-desktop pbg-share-row" style={borderStyle}>
        <div className="pbg-desktop-label-normal">{label}</div>
        <div className="pbg-desktop-secondary-text pbg-desktop-small-text">{hint}</div>
        {this.renderAmount()}
      </div>
    );
  }
}

export default ShareRow;
