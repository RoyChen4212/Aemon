import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/consumer/mobile/label.story.js');
  require('../stories/consumer/mobile/heading.story.js');
  require('../stories/consumer/mobile/hint.story.js');
  require('../stories/consumer/mobile/primary-button.story.js');
  require('../stories/consumer/mobile/secondary-button.story.js');
  require('../stories/consumer/mobile/small-button.story.js');
  require('../stories/consumer/mobile/link-button.story.js');
  require('../stories/consumer/mobile/facebook-button.story.js');
  require('../stories/consumer/mobile/small-facebook-button.story.js');
  require('../stories/consumer/mobile/text-field.story.js');
  require('../stories/consumer/mobile/password-field.story.js');
  require('../stories/consumer/mobile/picker.story.js');
  require('../stories/consumer/mobile/date-picker.story.js');
  require('../stories/consumer/mobile/time-picker.story.js');
  require('../stories/consumer/mobile/datetime-picker.story.js');
  require('../stories/consumer/mobile/historical-picker.story.js');
  require('../stories/consumer/mobile/checkbox.story.js');
  require('../stories/consumer/mobile/new-address-field.story.js');
  require('../stories/consumer/mobile/address-field.story.js');
  require('../stories/consumer/mobile/multi-select-field.story.js');
  require('../stories/consumer/mobile/phone-field.story.js');

  require('../stories/consumer/desktop/banner.story.js');
  require('../stories/consumer/desktop/subheader.story.js');
}

configure(loadStories, module);
