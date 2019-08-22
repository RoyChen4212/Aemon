import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class ContactImportInputOption extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { onSelect, value } = this.props;
    onSelect(value);
  };

  render() {
    const { icon, label, selected } = this.props;
    const iconClass = `pbg-icon-${icon}`;
    return (
      <div className={cx('pbg-contact-import-input-option', { 'pbg-selected': selected })} onClick={this.onClick}>
        <div className={iconClass} />
        <div className="pbg-desktop-label-normal">{label}</div>
      </div>
    );
  }
}

export default ContactImportInputOption;
