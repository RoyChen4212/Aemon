import BaseButton, { CLASS_NAME } from '../../shared/base-button';
import Hint from '../hint';

import './style.scss';

class BaseMobileButton extends BaseButton {
  get hint() {
    return this.renderHint(Hint);
  }
}

class PrimaryButton extends BaseMobileButton {
  baseClassName = `${CLASS_NAME} pbg-consumer-mobile pbg-button-primary`;
}

class SecondaryButton extends BaseMobileButton {
  baseClassName = `${CLASS_NAME} pbg-consumer-mobile pbg-button-secondary`;
}

class SmallButton extends BaseMobileButton {
  baseClassName = `${CLASS_NAME} pbg-consumer-mobile pbg-button-small`;
}

class LinkButton extends BaseMobileButton {
  baseClassName = `${CLASS_NAME} pbg-consumer-mobile pbg-button-link`;
}

class FacebookButton extends BaseMobileButton {
  baseClassName = `${CLASS_NAME} pbg-consumer-mobile pbg-button-facebook`;
}

class SmallFacebookButton extends BaseMobileButton {
  baseClassName = `${CLASS_NAME} pbg-consumer-mobile pbg-button-facebook-small`;
}

export const types = {
  PRIMARY: 'primary',
  SECONDARY: 'seconday',
  SMALL: 'small',
  LINK: 'link',
  FACEBOOK: 'facebook',
  FACEBOOK_SMALL: 'facebook-small',
};

export { PrimaryButton, SecondaryButton, SmallButton, LinkButton, FacebookButton, SmallFacebookButton };
