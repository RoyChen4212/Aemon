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

  renderOption = ({ value, label }, i) => {
    const selected = value === this.props.selected ? 'selected' : '';
    const first = i === 0 ? 'picker-item-rounded-top' : '';
    const last = i === this.options.length - 1 ? 'picker-item-rounded-bottom' : '';
    return (
      <div
        className={`picker-item ${selected} ${first} ${last}`}
        key={value}
        onClick={this.props.onOptionClick}>
        <Label type={selected ? labelTypes.CLICKABLE : ''}>{label}</Label>
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
