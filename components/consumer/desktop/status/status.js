import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Hint from '../hint';
import PopoverTooltip from '../popover-tooltip';
import StatusIcon from '../status-icon';

import './style.css';

class Status extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
  }

  static defaultProps = {
    label: null,
    value: null,
    hint: null,
    tooltip: null,
  }

  renderLabel = () => {
    const labelClassName = classnames('status-label', { 'status-question-mark': !!this.props.tooltip });

    if (!this.props.tooltip) {
      return <p className={labelClassName}>{this.props.label}</p>;
    }

    const trigger = ({ onMouseEnter, onMouseLeave }) => (
      <p className={labelClassName} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {this.props.label}
      </p>
    );

    return (
      <PopoverTooltip
        content={<span>{this.props.tooltip}</span>}
        trigger={trigger}
      />
    );
  }

  render() {
    return (
      <div className="pbg-status">
        <StatusIcon />

        <div className="status-text">
          {this.renderLabel()}
          <p className="status-value">{this.props.value}</p>
          <Hint>{this.props.hint}</Hint>
        </div>
      </div>
    );
  }
}

export default Status;
