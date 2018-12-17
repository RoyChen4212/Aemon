import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/consumer/mobile/label.story.js');
  require('../stories/consumer/mobile/heading.story.js');
  require('../stories/consumer/mobile/hint.story.js');
  require('../stories/consumer/mobile/button.story.js');
  require('../stories/consumer/mobile/text-field.story.js');
  require('../stories/consumer/mobile/password-field.story.js');
  require('../stories/consumer/mobile/picker.story.js');
  require('../stories/consumer/mobile/date-picker.story.js');
  require('../stories/consumer/mobile/time-picker.story.js');
  require('../stories/consumer/mobile/datetime-picker.story.js');
}

configure(loadStories, module);
