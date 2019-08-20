import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

class Subheader extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    anchor: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { text, anchor, className } = this.props;

    return (
      <div className={cx('pbg-subheader-wrapper', className)}>
        <div className="pbg-subheader-text">
          <a id={anchor}>{text}</a>
        </div>

        <div className="pbg-subheader-divider" />
      </div>
    );
  }
}

export default Subheader;
