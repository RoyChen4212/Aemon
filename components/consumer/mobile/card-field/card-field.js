import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Cards from './cards';
import DivInput from '../div-input';
import { cardTypes } from '../../shared/card-types';

import './style.scss';

class CardField extends React.Component {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-text-field pbg-card-field';

  static propTypes = {
    htmlId: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    focused: PropTypes.bool,
    allowedCardTypes: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    htmlId: null,
    label: null,
    error: null,
    focused: false,
    allowedCardTypes: cardTypes,
  };

  render() {
    const { label, error, focused, allowedCardTypes, htmlId } = this.props;

    return (
      <div className={this.baseClassName}>
        {label && (
          <div className="pbg-card-field-label-wrapper">
            <div
              className={cx('pbg-mobile-label-normal', 'pbg-label-with-cards', {
                'pbg-mobile-label-error': error,
              })}
            >
              {label}
            </div>
            <Cards allowedCardTypes={allowedCardTypes} />
          </div>
        )}
        <div className="pbg-card-field-wrapper">
          <DivInput error={error} focused={focused} htmlId={htmlId} />
        </div>
      </div>
    );
  }
}

export default CardField;
