import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { values } from 'lodash';

import PopoverTooltip from '../popover-tooltip';

import './style.scss';

export const iconTypes = {
  LOCK: 'lock',
  UNLOCK: 'unlock',
  PRICE_TAG: 'price-tag',
  TRANSACTION: 'transaction',
  CREDIT_CARD: 'credit-card',
  CREDIT_CARD_PENDING: 'credit-card-pending',
  CREDIT_CARD_ADD: 'credit-card-add',
  CREDIT_CARD_SUBTRACT: 'credit-card-subtract',
  CALENDAR: 'calendar',
  CALENDAR_START: 'calendar-start',
  CALENDAR_END: 'calendar-end',
  CLOCK: 'clock',
  HOUR_GLASS: 'hour-glass',
};

class Status extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    iconType: PropTypes.oneOf(values(iconTypes)).isRequired,
    tooltip: PropTypes.string,
  };

  static defaultProps = {
    tooltip: null,
  };

  renderLabel = () => {
    const { tooltip, label } = this.props;
    const labelClassName = classnames('pbg-status-label', { 'pbg-status-question-mark': !!tooltip });

    if (!tooltip) {
      return <p className={labelClassName}>{label}</p>;
    }

    const trigger = ({ onMouseEnter, onMouseLeave }) => (
      <p className={labelClassName} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {label}
      </p>
    );

    return <PopoverTooltip content={<span>{tooltip}</span>} trigger={trigger} />;
  };

  render() {
    const { iconType, value, hint } = this.props;
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const iconClass = `pbg-icon-${iconType}-small`;
    return (
      <div className="pbg-consumer-desktop pbg-status">
        <div className="pbg-status-icon-container">
          <i className={iconClass} />
        </div>

        <div className="pbg-status-text">
          {this.renderLabel()}
          <p className="pbg-status-value">{value}</p>
          <span className="pbg-desktop-small-text pbg-desktop-secondary-text">{hint}</span>
        </div>
      </div>
    );
  }
}

export default Status;
