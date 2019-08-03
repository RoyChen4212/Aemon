import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import TextField from '../text-field';
import ContactImportInputOption from './contact-import-input-option';

const baseClassName = 'pbg-consumer-desktop pbg-contact-import-input';

class ContactImportInput extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    onSelect: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  static defaultProps = {
    placeholder: null,
    value: null,
  };

  state = { isOpen: false };

  onSelect = value => {
    const { onSelect, onChange } = this.props;
    onSelect(value);
    onChange({ target: { value: null } });
  };

  onFocus = () => this.setState({ isOpen: true });

  onBlur = () => setTimeout(() => this.setState({ isOpen: false }), 100);

  render() {
    const { placeholder, options, value, onChange } = this.props;
    const { isOpen } = this.state;
    const valueLowerCase = value ? value.toLowerCase() : '';
    const filteredOptions = options.filter(option =>
      option.label ? option.label.toLowerCase().indexOf(valueLowerCase) !== -1 : true
    );
    return (
      <div className={baseClassName}>
        <TextField
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {isOpen && filteredOptions.length !== 0 && (
          <div className="pbg-contact-import-input-options">
            {filteredOptions.map(({ label, icon, value: val }) => (
              <ContactImportInputOption key={label} label={label} value={val} icon={icon} onSelect={this.onSelect} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ContactImportInput;
