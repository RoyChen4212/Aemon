import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';
import Divider from '../divider';

class NavbarBrand extends PureComponent {
  static baseClassName = 'pbg-consumer-mobile pbg-navbar-brand';

  static propTypes = {
    merchantLogoUrl: PropTypes.string.isRequired,
    poweredByText: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.node),
    className: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    className: null,
  };

  state = { expanded: false };

  expand = () => this.setState({ expanded: true });

  collapse = () => this.setState({ expanded: false });

  renderChild = (child, index) => (
    <Fragment key={`child=${index}`}>
      <Divider />
      {child}
    </Fragment>
  );

  render() {
    const { merchantLogoUrl, poweredByText, children, className } = this.props;
    const { expanded } = this.state;

    return (
      <div className={cx(NavbarBrand.baseClassName, className)}>
        <div className="pbg-navbar-text-container">
          <div className="pbg-navbar-brand-icon" style={{ backgroundImage: `url(${merchantLogoUrl})` }} />
          <span className="pbg-navbar-brand-text">{poweredByText}</span>
          <div className="pbg-navbar-brand-pbg-icon pbg-logo-powered-by-gray" />
        </div>
        {children &&
          (expanded ? (
            <div className="pbg-navbar-brand-menu pbg-icon-cross-small-blue" onClick={this.collapse} />
          ) : (
            <div className="pbg-navbar-brand-menu pbg-icon-menu-small-blue" onClick={this.expand} />
          ))}
        {expanded && children && (
          <div className="pbg-navbar-brand-menu-items pbg-mobile-shadow-level-one">
            {children.map(this.renderChild)}
          </div>
        )}
      </div>
    );
  }
}

export default NavbarBrand;
