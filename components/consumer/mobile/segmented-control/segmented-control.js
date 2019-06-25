import React from 'react';
import PropTypes from 'prop-types';
import { isObject, findIndex, first, last } from 'lodash';
import makeEvent from '../../../lib/make-event';

import './style.scss';

class SegmentedControl extends React.Component {
  static propTypes = {
    segments: PropTypes.arrayOf((propValue, key, componentName, _l, propName) => {
      const prop = propValue[key];
      if (!isObject(prop) || prop.label) {
        return new Error(`Invalid prop '${propName}' supplied to ${componentName}`);
      }
    }),
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    array: [],
    onChange: () => {},
  };

  static types = {
    list: 'list',
    pulse: 'pulse',
  };

  state = {
    activeSegment: this.activeSegment,
  };

  componentDidMount() {
    this.onChange(makeEvent(this.intialActiveSegment()));
    this.setState({ activeSegment: this.intialActiveSegment() });
  }

  onChange = ev => {
    this.props.onChange(ev);
    this.setState({ activeSegment: ev.target.value });
  };

  intialActiveSegment() {
    const index = findIndex(this.props.segments, segment => segment.active);
    return index > -1 ? index : 0;
  }

  get firstControl() {
    return this.renderControl(first(this.props.segments) || {}, 0);
  }

  get secondControl() {
    return this.renderControl(last(this.props.segments) || {}, 1);
  }

  renderControl(config, index) {
    const isActive = this.state.activeSegment === index;
    const className = `pbg-segmented-control-button ${config.type}${isActive ? ' active' : ''}`;
    return (
      <div className={className} onClick={() => this.onChange(makeEvent(index))}>
        <span>{config.label ? config.label : '[Label Placeholder]'}</span>
      </div>
    );
  }

  render() {
    return (
      <div className="pbg-consumer-mobile pbg-segmented-control">
        {this.firstControl}
        {this.secondControl}
      </div>
    );
  }
}

export default SegmentedControl;
