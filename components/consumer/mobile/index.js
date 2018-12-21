import formFields from './form-fields';
import buttons from './button';
import headings from './heading';
import Hint, { hintTypes } from './hint';
import Label, { labelTypes } from './label';

const mobile = {
  ...formFields,
  ...buttons,
  ...headings,
  Hint,
  hintTypes,
  Label,
  labelTypes,
};

export default mobile;