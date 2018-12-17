import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label, { types as labelTypes } from '../../../components/consumer/mobile/label';
import { H1, H2, H3 } from '../../../components/consumer/mobile/heading';
import Hint, { types as hintTypes } from '../../../components/consumer/mobile/hint';
import {
  PrimaryButton, SecondaryButton, SmallButton, LinkButton, FacebookButton, SmallFacebookButton,
} from '../../../components/consumer/mobile/button';
import {
  TextField, PasswordField
} from '../../../components/consumer/mobile/form-fields';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Button', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="story-wrapper">
            <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
          </div>
          <div className="story-wrapper">
            <PrimaryButton disabled onClick={action('clicked')}>Primary Button Disabled</PrimaryButton>
          </div>
          <div className="story-wrapper">
            <PrimaryButton hint="With Hint" onClick={action('clicked')}>Primary Button</PrimaryButton>
          </div>
          <div className="story-wrapper">
            <SecondaryButton onClick={action('clicked')}>Secondary Button</SecondaryButton>
          </div>
          <div className="story-wrapper">
            <SecondaryButton disabled onClick={action('clicked')}>Secondary Button Disabled</SecondaryButton>
          </div>
          <div className="story-wrapper">
            <SecondaryButton hint="With Hint" onClick={action('clicked')}>Secondary Button</SecondaryButton>
          </div>
          <div className="story-wrapper">
            <FacebookButton onClick={action('clicked')}>Facebook Button</FacebookButton>
          </div>
          <div className="story-wrapper">
            <FacebookButton disabled onClick={action('clicked')}>Facebook Button Disabled</FacebookButton>
          </div>
          <div className="story-wrapper">
            <FacebookButton hint="With Hint" onClick={action('clicked')}>Facebook Button</FacebookButton>
          </div>
        </div>
        <div className="col-6">
          <div className="story-wrapper">
            <SmallButton onClick={action('clicked')}>Small Button</SmallButton>
          </div>
          <div className="story-wrapper">
            <SmallButton disabled onClick={action('clicked')}>Small Button Disabled</SmallButton>
          </div>
          <div className="story-wrapper">
            <SmallButton hint="With Hint" onClick={action('clicked')}>Small Button</SmallButton>
          </div>
          <div className="story-wrapper">
            <LinkButton onClick={action('clicked')}>Link Button</LinkButton>
          </div>
          <div className="story-wrapper">
            <LinkButton disabled onClick={action('clicked')}>Link Button Disabled</LinkButton>
          </div>
          <div className="story-wrapper">
            <LinkButton hint="With Hint" onClick={action('clicked')}>Link Button</LinkButton>
          </div>
          <div className="story-wrapper">
            <SmallFacebookButton onClick={action('clicked')}>Small Facebook Button</SmallFacebookButton>
          </div>
          <div className="story-wrapper">
            <SmallFacebookButton disabled onClick={action('clicked')}>Small Facebook Button Disabled</SmallFacebookButton>
          </div>
          <div className="story-wrapper">
            <SmallFacebookButton hint="With Hint" onClick={action('clicked')}>Small Facebook Button</SmallFacebookButton>
          </div>
        </div>
      </div>
    </div>
  ));
