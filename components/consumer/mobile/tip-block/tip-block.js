import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { iconTypes } from '../../shared/icon-types';
import { colorTypes } from '../../shared/color-types';
import './style.scss';

/** @extends React.Component */
class TipBlock extends React.Component {
  className = 'pbg-consumer-mobile pbg-tip-block';

  static propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  static defaultProps = {
    icon: iconTypes.QUESTION_MARK,
    color: colorTypes.GRAY_10,
  };

  render() {
    const { icon, color, title, description } = this.props;

    return (
      <div className={classnames(this.className, `pbg-bg-color-${color}`)}>
        <div className="pbg-tip-block-title-wrapper">
          {<i className={classnames({ [`pbg-icon-${icon}-small-gray`]: icon })} />}
          <div className="pbg-mobile-label-strong">{title}</div>
        </div>
        <div className="pbg-mobile-paragraph">{description}</div>
      </div>
    );
  }
}

export default TipBlock;
