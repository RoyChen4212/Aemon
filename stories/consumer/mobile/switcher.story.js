import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';

import { withContainer, wrapStory, withGreyContainer, withMobileSizing, withMiddleSizing } from '../../util/decorators';
import Switcher from '../../../components/consumer/mobile/switcher';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import CornerCheckmark from '../../../components/consumer/mobile/switcher/corner-checkmark';
import SwitcherItem from '../../../components/consumer/mobile/switcher/switcher-item';

storiesOf('Consumer/Mobile/Onboarding/switcher', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMobileSizing)
  .addDecorator(withGreyContainer)
  .add('corner-checkmark', () => <CornerCheckmark />)
  .add('switcher-item/active', () => <SwitcherItem label="Label" hint="Text expanding on the label" active />)
  .add('switcher-item/inactive', () => <SwitcherItem label="Label" hint="Text expanding on the label" />)
  .add('default', () => (
    <SwitcherWorkflow
      options={[
        {
          label: 'Option1',
          hint: 'hint for option 1',
          value: 'option1',
        },
        {
          label: 'Option2',
          hint: 'hint for option 1',
          value: 'option2',
        },
      ]}
    />
  ))
  .add('long-hint', () => (
    <SwitcherWorkflow
      options={[
        {
          label: 'Option1',
          hint: 'hint for option 1 with long text',
          value: 'option1',
        },
        {
          label: 'Option2',
          hint: 'hint for option 1 with long text',
          value: 'option2',
        },
      ]}
    />
  ));

storiesOf('Consumer/Mobile/Onboarding/switcher', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMiddleSizing)
  .addDecorator(withGreyContainer)
  .add('middle size', () => (
    <SwitcherWorkflow
      options={[
        {
          label: 'Option1',
          hint: 'hint for option 1',
          value: 'option1',
        },
        {
          label: 'Option2',
          hint: 'hint for option 1',
          value: 'option2',
        },
      ]}
    />
  ));

class SwitcherWorkflow extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        hint: PropTypes.string,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  constructor(props) {
    super(props);

    const { options } = this.props;

    this.state = {
      value: options[0].value,
    };
  }

  onChange = value => this.setState({ value });

  render() {
    const { options } = this.props;
    return <Switcher options={options} value={this.state.value} onChange={this.onChange} />;
  }
}
