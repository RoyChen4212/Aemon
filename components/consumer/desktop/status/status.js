import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Hint from '../hint';
import PopoverTooltip from '../popover-tooltip';

import './style.css';

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
    const labelClassName = classnames('pbg-status-label', { 'pbg-status-question-mark': !!this.props.tooltip });

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
    return (
      <div className="pbg-status">
        <div className="pbg-status-icon-container">
          <img src={require(`../img/${this.props.iconType}-small.svg`)} />
        </div>

        <div className="pbg-status-text">
          {this.renderLabel()}
          <p className="pbg-status-value">{this.props.value}</p>
          <Hint>{this.props.hint}</Hint>
        </div>
      </div>
    );
  }
}

export default Status;
