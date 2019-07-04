import React  from 'react';
import PropTypes from 'prop-types';

import {FacebookButton} from "../button";
import './style.scss';

const baseClassName = 'pbg-consumer-desktop pbg-facebook-input';

const FacebookInput = ({buttonLabel, hint, ...rest}) => (
  <div className={baseClassName}>
    <FacebookButton {...rest}>
      { buttonLabel }
    </FacebookButton>
    <p
      className="pbg-desktop-secondary-text pbg-desktop-small-text"
    >
      { hint }
    </p>
  </div>
);

FacebookInput.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};

export default FacebookInput;
