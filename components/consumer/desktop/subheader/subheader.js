import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Subheader extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const {text} = this.props;

    return (
      <div className='pbg-subheader-wrapper'>
        <div className='pbg-subheader-text'>
          {text}
        </div>

        <div className='pbg-subheader-divider' />
      </div>
    );
  }
}

export default Subheader;
