import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';

import Icons from '../../../components/consumer/global/icons';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Global/Icons/Small/Email & Messaging', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('envelope-closed-small', () => <Icons className="pbg-envelope-closed-small" />)
  .add('speech-bubble-small', () => <Icons className="pbg-speech-bubble-small" />)

storiesOf('Consumer/Global/Icons/Small/Editing', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('edit-small', () => <Icons className="pbg-edit-small" />)
  .add('org-controls-small-gray', () => <Icons className="pbg-org-controls-small-gray" />)
  .add('org-controls-small-blue', () => <Icons className="pbg-org-controls-small-blue" />)
  .add('cog-small-gray', () => <Icons className="pbg-cog-small-gray" />)
  .add('cog-small-blue', () => <Icons className="pbg-cog-small-blue" />)

storiesOf('Consumer/Global/Icons/Small/Group Invites', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('envelope-open-small-gray', () => <Icons className="pbg-envelope-open-small-gray" />)
  .add('envelope-open-small-blue', () => <Icons className="pbg-envelope-open-small-blue" />)

storiesOf('Consumer/Global/Icons/Small/Group Creation', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('rocket-small', () => <Icons className="pbg-rocket-small" />)



