import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../heading';
import Hint from '../hint';
import { LinkButton } from '../button';
import './style.css';

const TYPE_ERROR = 'error';

class ContributorCard extends React.PureComponent {
  static types = {
    error: TYPE_ERROR,
  }

  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
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
    return this.props.cta.map((btn) => {
      if (this.props.cta.length === 1) {
        return <LinkButton onClick={btn.onClick}>{btn.label}</LinkButton>;
      }
      return (
        <div className="cta-container">
          <LinkButton onClick={btn.onClick}>{btn.label}</LinkButton>
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
            <Hint multiline="true" >{this.props.content}</Hint>
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
