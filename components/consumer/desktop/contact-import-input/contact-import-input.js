import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import TextField from '../text-field';
import ContactImportInputOption from './contact-import-input-option';
import FormField from '../form-field';

import { ARROW_DOWN_KEYCODE, ARROW_UP_KEYCODE, RETURN_KEYCODE } from '../../global/constants/key-codes';
import './style.scss';

class ContactImportInput extends FormField {
  static baseClassName = 'pbg-consumer-desktop pbg-contact-import-input';

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
    className: PropTypes.string,
  };

  static defaultProps = {
    placeholder: null,
    value: null,
    className: null,
  };

  state = { isOpen: false, selected: 0 };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    switch (e.keyCode) {
      case ARROW_DOWN_KEYCODE:
        this.onArrowDownPress();
        break;
      case ARROW_UP_KEYCODE:
        this.onArrowUpPress();
        break;
      case RETURN_KEYCODE:
        this.onReturnPress();
        break;
      default:
    }
  };

  onArrowDownPress = () => {
    const { selected } = this.state;
    const filteredOptionsLength = this.filteredOptionsByUserInput().length - 1;
    const newSelected = selected === filteredOptionsLength ? 0 : selected + 1;
    this.setState({ selected: newSelected });
  };

  onArrowUpPress = () => {
    const { selected } = this.state;
    const filteredOptionsLength = this.filteredOptionsByUserInput().length - 1;
    const newSelected = selected === 0 ? filteredOptionsLength : selected - 1;
    this.setState({ selected: newSelected });
  };

  onReturnPress = () => {
    const { selected } = this.state;
    const filteredOptions = this.filteredOptionsByUserInput();
    this.onSelect(filteredOptions[selected].value);
    this.closeDropDown();
  };

  onSelect = value => {
    const { onSelect, onChange } = this.props;
    onSelect(value);
    onChange({ target: { value: null } });
  };

  onFocus = () => {
    this.setState({ isOpen: true, selected: 0 });
  };

  onBlur = () => {
    this.closeDropDown();
  };

  closeDropDown = () => setTimeout(() => this.setState({ isOpen: false, selected: 0 }), 100);

  filteredOptionsByUserInput = () => {
    const { options, value } = this.props;

    const valueLowerCase = value ? value.toLowerCase() : '';
    return options.filter(option => (option.label ? option.label.toLowerCase().indexOf(valueLowerCase) !== -1 : true));
  };

  renderTextField = () => {
    const { placeholder, value, onChange } = this.props;

    return (
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        autoComplete="off"
      />
    );
  };

  renderOption = ({ label, icon, value: val }, index) => {
    const { selected } = this.state;

    return (
      <ContactImportInputOption
        key={label}
        label={label}
        selected={index === selected}
        value={val}
        icon={icon}
        onSelect={this.onSelect}
      />
    );
  };

  render() {
    const { isOpen } = this.state;
    const { className } = this.props;
    const filteredOptions = this.filteredOptionsByUserInput();
    return (
      <div className={cx(ContactImportInput.baseClassName, className)}>
        {this.renderLabel()}
        {this.renderTextField()}
        {isOpen && filteredOptions.length !== 0 && (
          <div className="pbg-contact-import-input-options">{filteredOptions.map(this.renderOption)}</div>
        )}
        <div className="pbg-contact-import-input-error">{this.renderHintOrError()}</div>
      </div>
    );
  }
}

export default ContactImportInput;
