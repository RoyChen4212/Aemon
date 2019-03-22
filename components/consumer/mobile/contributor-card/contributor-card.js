import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../heading';
import Hint from '../hint';
import Label, { labelTypes } from '../label';
import { LinkButton } from '../button';
import { HistoricalPicker } from '../historical-picker';
import './style.css';

const TYPE_ERROR = 'error';

class ContributorCard extends React.PureComponent {
  static types = {
    error: TYPE_ERROR,
  }

  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    cta: PropTypes.array,
  }

  static defaultProps = {
    type: null,
    title: null,
    content: null,
    cta: [],
  }

  get className() {
    return `pbg-consumer-mobile pbg-contributor-card ${this.typeClassName}`
  }

  get typeClassName() {
    switch (this.props.type) {
      case TYPE_ERROR:
        return 'pbg-contributor-card-type-error';
      default:
        return 'pbg-contributor-card-type-notice';
    }
  }

  get cta() {
    return this.props.cta.map((cta, index) => {
      return (
        <div className={this.props.cta.length > 1 ? 'cta-container' : ''} key={`cta-${index}`}>
          {
            cta.type === 'picker' ? (
              <HistoricalPicker options={cta.options} onChange={cta.onChange} />
            ) : (
              <LinkButton onClick={cta.onClick}>{cta.label}</LinkButton>
            )
          }
        </div>);
      }
    );
  }

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-contributor-card-heading">{this.props.heading}</div>
        <div className="pbg-contributor-card-body">
          <H2>{this.props.title}</H2>
          <div className="pbg-contributor-card-content">
            {this.props.content}
          </div>
        </div>
        <div className="pbg-contributor-card-ctas">
          <div>
            {this.cta}
          </div>
        </div>
      </div>
    );
  }
};

export default ContributorCard;
