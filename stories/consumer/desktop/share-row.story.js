import React from 'react';
import { storiesOf } from '@storybook/react';

import ShareRow from '../../../components/consumer/desktop/share-row';
import ShareDetailsPopover from '../../../components/consumer/desktop/share-row/share-details-popover';
import { withContainer, wrapStory } from '../../util/decorators';
import { colorTypes } from '../../../components/consumer/shared/color-types';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Info/share-row', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('share-row/default', () => (
    <ShareRow name="shareRow" label="Heading" hint="Hint text." amount="$00.00" color={colorTypes.BLUE_60} />
  ))
  .add('share-row/details', () => (
    <ShareRow
      name="shareRow"
      label="Heading"
      hint="Hint text."
      amount="$00.00"
      color={colorTypes.BLUE_60}
      detailsText="Details"
      detailsContent={<ShareDetailsPopover share="$XX,XXX.XX" fee="$X.XX" total="$XX,XXX.XX" />}
    />
  ));
