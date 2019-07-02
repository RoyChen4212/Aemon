import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ContributorCard from '../../../components/consumer/mobile/contributor-card';
import Hint from '../../../components/consumer/mobile/hint';
import { withGreyContainer, wrapStory, withMobileSizing } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'Change', value: 'change' },
  { label: 'Edit', value: 'edit' },
  { label: 'Withdraw', value: 'withdraw' },
];

storiesOf('Consumer/Mobile/contributor-card', module)
  .addDecorator(wrapStory)
  .addDecorator(withMobileSizing)
  .addDecorator(withGreyContainer)
  .add('contributor-card/default', () => (
    <ContributorCard
      heading="You are a contributor!"
      title="Your expected charge: USD $850.00"
      content={<Hint multiline="true">Up to a max. of $900.00 on or before 08 Dic to your visa ending in 4432.</Hint>}
      cta={[{ label: 'Change', onClick: action('click') }, { label: 'See Schedule', onClick: action('click') }]}
    />
  ))
  .add('contributor-card/with-picker', () => (
    <ContributorCard
      heading="You are a contributor!"
      title="Your expected charge: USD $850.00"
      content={<Hint multiline="true">Up to a max. of $900.00 on or before 08 Dic to your visa ending in 4432.</Hint>}
      cta={[
        {
          label: 'Change',
          onChange: action('change'),
          type: 'picker',
          options,
        },
        { label: 'See Schedule', onClick: action('click') },
      ]}
    />
  ))
  .add('contributor-card/error', () => (
    <ContributorCard
      type={ContributorCard.types.error}
      heading="Payment failure!"
      title="This is the payment failure header text."
      content={<Hint multiline>Body text providing supplementary information regarding the failure to the user.</Hint>}
      cta={[{ label: 'CTA', onClick: action('click') }]}
    />
  ))
  .add('contributor-card/no-heading', () => (
    <ContributorCard
      title="This is a Card with no heading."
      content={<Hint multiline>Body text providing supplementary information regarding the failure to the user.</Hint>}
      cta={[{ label: 'CTA', onClick: action('click') }]}
    />
  ));
