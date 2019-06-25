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
    const labelClassName = classnames('pbg-status-label', {
      'pbg-status-question-mark': !!this.props.tooltip,
    });

    if (!this.props.tooltip) {
      return <p className={labelClassName}>{this.props.label}</p>;
    }

    const trigger = ({ onMouseEnter, onMouseLeave }) => (
      <p className={labelClassName} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {this.props.label}
      </p>
    );

    return <PopoverTooltip content={<span>{this.props.tooltip}</span>} trigger={trigger} />;
  };

  render() {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const iconSource = require(`../img/pbg-${this.props.iconType}-small.svg`);
    return (
      <div className="pbg-consumer-desktop pbg-status">
        <div className="pbg-status-icon-container">
          <img src={iconSource} />
        </div>

        <div className="pbg-status-text">
          {this.renderLabel()}
          <p className="pbg-status-value">{this.props.value}</p>
          <span className="pbg-desktop-small-text pbg-desktop-secondary-text">{this.props.hint}</span>
        </div>
      </div>
    );
  }
}

export default Status;
