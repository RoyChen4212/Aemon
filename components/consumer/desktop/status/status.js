import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import PopoverTooltip from '../popover-tooltip';

import './style.scss';

class Status extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
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
    const iconSource = require(`../img/pbg-${iconType}-small.svg`);
    return (
      <div className="pbg-consumer-desktop pbg-status">
        <div className="pbg-status-icon-container">
          <img src={iconSource} />
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
