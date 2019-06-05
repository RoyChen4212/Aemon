import React from 'react';
import { includes } from 'lodash';

import './style.css';

export const LOCK = 'lock';
const types = [LOCK];

class StatusIconContainer extends React.PureComponent {
  static propTypes = {
    type(props, propName) {
      if (!includes(types, props[propName])) {
        return new Error(`Invalid prop ${propName} supplied to StatusIconContainer. Validation failed.`);
      }
    },
  }

  static defaultProps = {
    type: null
  }

  get icon() {
    if (!this.props.type) return null;
    try {
      return require(`../img/${this.props.type}-small.svg`);
    } catch (error) {
      return null;
    }
  }

  render() {
    return (
      <div className="pbg-status-icon-container">
        {this.icon && <img src={this.icon} />}
      </div>
    );
  }
};

export default StatusIconContainer;
