import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { values } from 'lodash';

import { iconTypes } from '../../shared/icon-types';
import PopoverTooltip from '../popover-tooltip';

import './style.scss';

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
        <i className="pbg-icon-question-mark-small-gray" />
      </p>
    );

    return <PopoverTooltip content={<span>{tooltip}</span>} trigger={trigger} />;
  };

  render() {
    const { iconType, value, hint } = this.props;
    const iconClass = `pbg-icon-${iconType}-small-gray`;
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
