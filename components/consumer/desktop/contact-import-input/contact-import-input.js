import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import TextField from '../text-field';
import ContactImportInputOption from './contact-import-input-option';
import FormField from '../form-field';

const baseClassName = 'pbg-consumer-desktop pbg-contact-import-input';

class ContactImportInput extends FormField {
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

  state = { isOpen: false, selected: 0 };

  onKeyDown = e => {
    if (e.keyCode === 40) {
      const { selected } = this.state;
      const filteredOptionsLength = this.filteredOptions().length - 1;
      const newSelected = selected === filteredOptionsLength ? 0 : selected + 1;
      this.setState({ selected: newSelected });
    }
    if (e.keyCode === 38) {
      const { selected } = this.state;
      const filteredOptionsLength = this.filteredOptions().length - 1;
      const newSelected = selected === 0 ? filteredOptionsLength : selected - 1;
      this.setState({ selected: newSelected });
    }
    if (e.keyCode === 13) {
      const { selected } = this.state;
      const filteredOptions = this.filteredOptions();
      this.onSelect(filteredOptions[selected].value);
      this.closeDropDown();
    }
  };

  onSelect = value => {
    const { onSelect, onChange } = this.props;
    onSelect(value);
    onChange({ target: { value: null } });
  };

  onFocus = e => {
    e.target.addEventListener('keydown', this.onKeyDown);
    this.setState({ isOpen: true, selected: 0 });
  };

  onBlur = e => {
    e.target.removeEventListener('keydown', this.onKeyDown);
    this.closeDropDown();
  };

  closeDropDown = () => setTimeout(() => this.setState({ isOpen: false, selected: 0 }), 100);

  filteredOptions = () => {
    const { options, value } = this.props;

    const valueLowerCase = value ? value.toLowerCase() : '';
    return options.filter(option => (option.label ? option.label.toLowerCase().indexOf(valueLowerCase) !== -1 : true));
  };

  render() {
    const { isOpen, selected } = this.state;
    const { placeholder, value, onChange } = this.props;
    const filteredOptions = this.filteredOptions();
    return (
      <div className={baseClassName}>
        {this.renderLabel()}
        <TextField
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          autoComplete="off"
        />
        {isOpen && filteredOptions.length !== 0 && (
          <div className="pbg-contact-import-input-options">
            {filteredOptions.map(({ label, icon, value: val }, index) => (
              <ContactImportInputOption
                key={label}
                label={label}
                selected={index === selected}
                value={val}
                icon={icon}
                onSelect={this.onSelect}
              />
            ))}
          </div>
        )}
        <div className="pbg-contact-import-input-error">{this.renderHintOrError()}</div>
      </div>
    );
  }
}

export default ContactImportInput;
