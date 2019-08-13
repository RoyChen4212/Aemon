import React from 'react';
import { storiesOf } from '@storybook/react';

import ShareRow from '../../../components/consumer/mobile/share-row';
import ShareDetailsOverlay from '../../../components/consumer/mobile/share-row/share-details-overlay';
import { withContainer, wrapStory } from '../../util/decorators';
import { colorTypes } from '../../../components/consumer/shared/color-types';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Commit/share-summary', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('share-row/default', () => (
    <ShareRow name="shareRow" label="Share label" hint="Hint" amount="$00.00" color={colorTypes.BLUE_60} />
  ))
  .add('share-row/details', () => (
    <ShareRow
      name="shareRow"
      label="Share label"
      hint="Hint"
      amount="$00.00"
      color={colorTypes.BLUE_60}
      detailsText="Details"
      detailsContent={<ShareDetailsOverlay share="$XX,XXX.XX" fee="$X.XX" total="$XX,XXX.XX" />}
    />
  ));
