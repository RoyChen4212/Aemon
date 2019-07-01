import React from 'react';

import get from 'lodash/get';
import Label, { labelTypes } from '../label';
import Container from '../container';

import './style.scss';

const baseClassName = 'pbg-consumer-desktop pbg-picker-menu';

class PickerMenu extends React.PureComponent {
  get options() {
    return get(this.props, 'options', []);
  }

  onOptionClick = value => {
    const { onOptionClick } = this.props;
    if (!onOptionClick) return null;
    return onOptionClick(value);
  };

  renderLabel = (label, selected) => {
    const { term, desc } = label;
    const strong = desc ? 'picker-menu-item-term-strong' : '';
    return (
      <Label type={selected ? labelTypes.CLICKABLE : ''}>
        <span className={`picker-menu-item-term ${strong}`}>{term}</span>
        {desc ? <span className="picker-menu-item-desc">{desc}</span> : ''}
      </Label>
    );
  };

  renderOption = ({ value, label }, i) => {
    const { selected } = this.props;
    const selectedClass = value === selected ? 'selected' : '';
    const first = i === 0 ? 'picker-menu-item-rounded-top' : '';
    const last = i === this.options.length - 1 ? 'picker-menu-item-rounded-bottom' : '';
    return (
      <div
        className={`picker-menu-item ${selectedClass} ${first} ${last}`}
        key={value}
        onClick={this.onOptionClick(value)}
      >
        {this.renderLabel(label, selectedClass)}
      </div>
    );
  };

  render() {
    const { active } = this.props;
    return (
      <div className={`${baseClassName} ${active ? 'active' : ''}`}>
        <Container solid shadow2 stroked>
          {this.options.map(this.renderOption)}
        </Container>
      </div>
    );
  }
}

export default PickerMenu;
