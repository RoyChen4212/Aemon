import BaseButton, { CLASS_NAME } from '../../shared/base-button';
import Hint from '../hint';

import './style.scss';

class PrimaryButton extends BaseButton {
  baseClassName = `${CLASS_NAME} pbg-consumer-desktop pbg-button-primary`;

  renderHint() {
    return super.renderHint(Hint);
  }
}

class FacebookButton extends PrimaryButton {
  baseClassName = `${CLASS_NAME} pbg-consumer-desktop pbg-button-facebook`;
}

export { PrimaryButton, FacebookButton };
