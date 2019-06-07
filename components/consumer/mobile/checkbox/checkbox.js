import React from 'react';
import FormField from '../form-field';
import Label from '../label';
import BaseCheckbox from '../../shared/base-checkbox';

import './style.css';

const Checkbox = BaseCheckbox(
  FormField,
  Label,
  'pbg-mobile pbg-form-field pbg-checkbox'
);

export { Checkbox };
