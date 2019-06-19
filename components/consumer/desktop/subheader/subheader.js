import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Subheader extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    anchor: PropTypes.string.isRequired,
  };

  render() {
    const { text, anchor } = this.props;

    return (
      <div className="pbg-subheader-wrapper">
        <div className="pbg-subheader-text">
          <a id={anchor}>{text}</a>
        </div>

        <div className="pbg-subheader-divider" />
      </div>
    );
  }
}

export default Subheader;
