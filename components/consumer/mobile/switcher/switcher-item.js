import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';
import CornerCheckmark from './corner-checkmark';

class SwitcherItem extends PureComponent {
  baseClassName = 'pbg-consumer-mobile pbg-switcher-item';

  static propTypes = {
    label: PropTypes.string.isRequired,
    hint: PropTypes.string,
    className: PropTypes.string,
    active: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    hint: null,
    onChange: null,
    className: null,
  };

  onClick = () => {
    const { onChange, value } = this.props;
    if (typeof onChange === 'function') {
      onChange(value);
    }
  };

  render() {
    const { label, hint, active, className } = this.props;
    return (
      <div className={cx(this.baseClassName, { active }, className)} onClick={this.onClick}>
        {active && <CornerCheckmark />}
        <div className={cx('pbg-switcher-item-label', active ? 'pbg-mobile-label-strong' : 'pbg-mobile-label-normal')}>
          {label}
        </div>
        {hint && <div className="pbg-switcher-item-hint pbg-mobile-hint-normal">{hint}</div>}
      </div>
    );
  }
}

export default SwitcherItem;
