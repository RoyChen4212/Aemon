import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/consumer/mobile/atomic.js');
  require('../stories/consumer/mobile/form-fields.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
