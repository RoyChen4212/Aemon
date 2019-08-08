import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withContainer, withMobileSizing, wrapStory, withGreyContainer } from '../../util/decorators';
import SectionCard from '../../../components/consumer/mobile/section-card';
import { sectionCardStatus } from '../../../components/consumer/mobile/section-card/constants';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { SmallButton, SmallFacebookButton } from '../../../components/consumer/mobile/button';
import DivInput from '../../../components/consumer/mobile/div-input/div-input';

// eslint-disable-next-line react/prop-types
const wrappedSmallButton = ({ children, ...rest }) => (
  <div style={{ width: '37px' }}>
    <SmallButton {...rest}>{children}</SmallButton>
  </div>
);

storiesOf('Consumer/Mobile/Section Components/section-card', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMobileSizing)
  .addDecorator(withGreyContainer)
  .add('section-card/default', () => (
    <SectionCard
      status={sectionCardStatus.ACTIVE}
      title="Section"
      onActivateButtonClick={action('')}
      completedLabel="Completed"
      activateButtonText="Connect"
    />
  ))
  .add('section-card/disabled', () => (
    <SectionCard
      status={sectionCardStatus.DISABLED}
      title="Section"
      stepNumber={1}
      headerButton={SmallFacebookButton}
      onActivateButtonClick={action('')}
      completedLabel="Completed"
      activateButtonText="Connect"
    >
      My Awesome content
    </SectionCard>
  ))
  .add('section-card/completed', () => (
    <SectionCard
      status={sectionCardStatus.COMPLETED}
      title="Section"
      stepNumber={1}
      headerButton={wrappedSmallButton}
      onActivateButtonClick={action('')}
      completedLabel="Completed"
      activateButtonText="Edit"
    >
      My Awesome content
    </SectionCard>
  ))
  .add('section-card/workflow', () => <SectionCardFullWorkflow />);

class SectionCardFullWorkflow extends React.PureComponent {
  state = { status: sectionCardStatus.ACTIVE };

  onActiveClick = () => {
    const { status } = this.state;

    if (status === sectionCardStatus.ACTIVE) {
      this.setState({ status: sectionCardStatus.COMPLETED });
    } else {
      this.setState({ status: sectionCardStatus.ACTIVE });
    }
  };

  render() {
    const { status } = this.state;

    const headerButton = status === sectionCardStatus.ACTIVE ? SmallFacebookButton : wrappedSmallButton;
    const activateButtonText = status === sectionCardStatus.ACTIVE ? 'Connect' : 'Edit';
    return (
      <SectionCard
        status={status}
        title="Section"
        stepNumber={1}
        headerButton={headerButton}
        onActivateButtonClick={this.onActiveClick}
        completedLabel="Completed"
        activateButtonText={activateButtonText}
      >
        <div style={{ marginBottom: '8px' }}>My Awesome Content</div>
        {<DivInput />}
      </SectionCard>
    );
  }
}
