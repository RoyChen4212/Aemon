import React from 'react';

import get from 'lodash/get';
import Label, { labelTypes } from '../label';
import Container from '../container';

import './style.css';

const baseClassName = 'pbg-consumer-desktop pbg-picker-menu';

class PickerMenu extends React.PureComponent {
  get options() {
    return get(this.props, 'options', []);
  }

  onOptionClick = (value) => {
    if (!this.props.onOptionClick) return;
    return this.props.onOptionClick(value);
  }

  renderOption = ({ value, label }, i) => {
    const selected = value === this.props.selected ? 'selected' : '';
    const first = i === 0 ? 'picker-menu-item-rounded-top' : '';
    const last = i === this.options.length - 1 ? 'picker-menu-item-rounded-bottom' : '';
    const { term, description } = label;
    return (
      <div
        className={`picker-menu-item ${selected} ${first} ${last}`}
        key={value}
        onClick={this.onOptionClick(value)}>
        <Label type={selected ? labelTypes.CLICKABLE : ''}>
          {term ? <span className="picker-menu-item-term">{term}</span> : ''}
          <span className="picker-menu-item-description">{description}</span>
        </Label>
      </div>
    );
  }

  render() {
    return(
      <div className={`${baseClassName} ${this.props.active ? 'active' : ''}` } >
        <Container solid shadow2 stroked>
          {this.options.map(this.renderOption)}
        </Container>
      </div>
    );
  }
}

export default PickerMenu;
