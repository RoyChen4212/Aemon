import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import ContributorCard from '../../../components/consumer/mobile/contributor-card';
import Hint from '../../../components/consumer/mobile/hint';
import { withGreyContainer, wrapStory, withMobileSizing } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=649%3A309';
const options = [
  { label: 'Change', value: 'change' },
  { label: 'Edit', value: 'edit' },
  { label: 'Withdraw', value: 'withdraw' },
];

storiesOf('Consumer/Mobile/Atomic Components/ContributorCard', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withMobileSizing)
  .addDecorator(withGreyContainer)
  .add('Standard', () => (
    <ContributorCard
      heading="You are a contributor!"
      title="Your expected charge: USD $850.00"
      content={<Hint multiline="true">Up to a max. of $900.00 on or before 08 Dic to your visa ending in 4432.</Hint>}
      cta={[
        { label: 'Change', onClick: action('click') },
        { label: 'See Schedule', onClick: action('click') },
      ]}
    />
  ))
  .add('With Picker', () => (
    <ContributorCard
      heading="You are a contributor!"
      title="Your expected charge: USD $850.00"
      content={<Hint multiline="true">Up to a max. of $900.00 on or before 08 Dic to your visa ending in 4432.</Hint>}
      cta={[
        { label: 'Change', onChange: action('change'), type: 'picker', options },
        { label: 'See Schedule', onClick: action('click') },
      ]}
    />
  ))
  .add('Error', () => (
    <ContributorCard
      type={ContributorCard.types.error}
      heading="Payment failure!"
      title="This is the payment failure header text."
      content="Body text providing supplementary information regarding the failure to the user."
      cta={[{ label: 'CTA', onClick: action('click') }]}
    />
  ));

