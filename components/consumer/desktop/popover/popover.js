import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import jQuery from 'jquery';

import Container from '../container';

import './style.scss';

class Popover extends React.PureComponent {
  popoverElementRef = React.createRef();

  static propTypes = {
    trigger: PropTypes.node,
    content: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    trigger: null,
    content: null,
    className: null,
  };

  state = {
    active: false,
  };

  get className() {
    return `pbg-popover pbg-popover-${this.active ? 'active' : 'inactive'}`;
  }

  get active() {
    const { active } = this.state;
    return active;
  }

  componentDidMount() {
    this.viewWidth = jQuery(window).width();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.active && !prevState.active) {
      this.positionPopoverWithinWindow();
      this.bindDeactivationEvent();
    }
  }

  positionPopoverWithinWindow() {
    const elem = jQuery(this.popoverElementRef.current);
    const popoverRightBorderPosition = elem.offset().left + elem.outerWidth();
    if (this.viewWidth < popoverRightBorderPosition) {
      elem.css({ left: this.viewWidth - popoverRightBorderPosition - 16 });
    }
  }

  activate = () => {
    this.setState({ active: true });
  };

  deactivate = () => {
    this.setState({ active: false });
  };

  bindDeactivationEvent = () => {
    const body = jQuery('body');
    body.on('click', this.deactivateIfClickOutside);
  };

  deactivateIfClickOutside = ev => {
    const elem = this.popoverElementRef.current;
    const parents = jQuery(ev.target).parents('.pbg-popover');
    const clickedOutside = elem !== ev.target && (parents && elem !== parents[0]);
    if (clickedOutside) this.deactivate();
  };

  onClick = ev => {
    this.activate();
    ev.preventDefault();
  };

  onMouseEnter = () => {
    this.activate();
  };

  onMouseLeave = () => {
    this.deactivate();
  };

  renderTriggerComponent() {
    const { trigger: TriggerComponent } = this.props;
    if (!TriggerComponent) return null;
    return <TriggerComponent onClick={this.onClick} />;
  }

  renderClickOutsideElement() {
    const { active } = this.state;
    return active ? <div className="pbg-click-outside-component" /> : null;
  }

  render() {
    const { content, className } = this.props;
    return (
      <div className={cx('pbg-consumer-desktop pbg-popover-container', className)}>
        {this.renderClickOutsideElement()}
        {this.renderTriggerComponent()}
        <Container shadow2 stroked solid className={this.className} ref={this.popoverElementRef}>
          {content}
        </Container>
      </div>
    );
  }
}

export default Popover;
