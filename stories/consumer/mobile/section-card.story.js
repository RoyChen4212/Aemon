import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withContainer, withMobileSizing, wrapStory, withGreyContainer } from '../../util/decorators';
import SectionCard from '../../../components/consumer/mobile/section-card';
import { sectionCardStatus } from '../../../components/consumer/mobile/section-card/contants';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { SmallButton, SmallFacebookButton } from '../../../components/consumer/mobile/button';
import DivInput from '../../../components/consumer/mobile/div-input/div-input';

storiesOf('Consumer/Mobile/Section Components/section-card', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMobileSizing)
  .addDecorator(withGreyContainer)
  .add('default', () => (
    <SectionCard
      status={sectionCardStatus.ACTIVE}
      title="Section"
      stepNumber={1}
      headerButton={SmallFacebookButton}
      onActivateButtonClick={action('')}
      completedLabel="Completed"
      activateButtonText="Connect"
    >
      <div style={{ marginBottom: '8px' }}>My Awesome Content</div>
      {<DivInput />}
    </SectionCard>
  ))
  .add('disabled', () => (
    <SectionCard
      status={sectionCardStatus.DISABLED}
      title="Section"
      stepNumber={1}
      headerButton={SmallFacebookButton}
      onActivateButtonClick={action('')}
      completedLabel="Completed"
      activateButtonText="Connect"
    >
      <div style={{ marginBottom: '8px' }}>My Awesome Content</div>
      {<DivInput />}
    </SectionCard>
  ))
  .add('completed', () => (
    <SectionCard
      status={sectionCardStatus.COMPLETED}
      title="Section"
      stepNumber={1}
      headerButton={SmallButton}
      onActivateButtonClick={action('')}
      completedLabel="Completed"
      activateButtonText="Edit"
    >
      My Awesome Content
    </SectionCard>
  ))
  .add('workflow', () => <SectionCardFullWorkflow />);

class SectionCardFullWorkflow extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      status: sectionCardStatus.ACTIVE,
    };
  }

  handleActiveClick = () => {
    const { status } = this.state;

    if (status === sectionCardStatus.ACTIVE) {
      this.setState({ status: sectionCardStatus.COMPLETED });
    } else {
      this.setState({ status: sectionCardStatus.ACTIVE });
    }
  };

  render() {
    const { status } = this.state;

    const headerButton = status === sectionCardStatus.ACTIVE ? SmallFacebookButton : SmallButton;
    const activateButtonText = status === sectionCardStatus.ACTIVE ? 'Connect' : 'Edit';
    return (
      <SectionCard
        status={status}
        title="Section"
        stepNumber={1}
        headerButton={headerButton}
        onActivateButtonClick={this.handleActiveClick}
        completedLabel="Completed"
        activateButtonText={activateButtonText}
      >
        <div style={{ marginBottom: '8px' }}>My Awesome Content</div>
        {<DivInput />}
      </SectionCard>
    );
  }
}
