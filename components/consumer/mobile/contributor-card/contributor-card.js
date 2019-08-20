import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { H2 } from '../heading';
import { LinkButton } from '../button';
import HistoricalPicker from '../historical-picker';
import './style.scss';

const TYPE_ERROR = 'error';

class ContributorCard extends React.PureComponent {
  static types = {
    error: TYPE_ERROR,
  };

  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    cta: PropTypes.array,
    className: PropTypes.string,
  };

  static defaultProps = {
    type: null,
    title: null,
    content: null,
    className: null,
    cta: [],
  };

  get className() {
    const { className } = this.props;
    return cx('pbg-consumer-mobile pbg-contributor-card', this.typeClassName, className);
  }

  get typeClassName() {
    const { type } = this.props;
    switch (type) {
      case TYPE_ERROR:
        return 'pbg-contributor-card-type-error';
      default:
        return 'pbg-contributor-card-type-notice';
    }
  }

  renderCTA() {
    const { cta } = this.props;
    return cta.map((item, index) => {
      return (
        <div className={cta.length > 1 ? 'cta-container' : ''} key={`cta-${index}`}>
          {item.type === 'picker' ? (
            <HistoricalPicker options={item.options} onChange={item.onChange} />
          ) : (
            <LinkButton onClick={item.onClick}>{item.label}</LinkButton>
          )}
        </div>
      );
    });
  }

  render() {
    const { heading, title, content } = this.props;
    return (
      <div className={this.className}>
        {heading && <div className="pbg-contributor-card-heading">{heading}</div>}
        <div className="pbg-contributor-card-body">
          <H2>{title}</H2>
          <div className="pbg-contributor-card-content">{content}</div>
        </div>
        <div className="pbg-contributor-card-ctas">
          <div>{this.renderCTA()}</div>
        </div>
      </div>
    );
  }
}

export default ContributorCard;
