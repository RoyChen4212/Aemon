import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/consumer/mobile/atomic.js');
  require('../stories/consumer/mobile/text-field.story.js');
  require('../stories/consumer/mobile/password-field.story.js');
  require('../stories/consumer/mobile/picker.story.js');
  require('../stories/consumer/mobile/date-picker.story.js');
  require('../stories/consumer/mobile/time-picker.story.js');
  require('../stories/consumer/mobile/datetime-picker.story.js');
  require('../stories/consumer/mobile/checkbox.story.js');
}

configure(loadStories, module);
