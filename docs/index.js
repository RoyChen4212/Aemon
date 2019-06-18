import React from 'react';
import ReactDOM from 'react-dom';
import { consumerDesktop, consumerMobile } from '../components';
const { ActivityCard, ActivityComment, Banner } = consumerDesktop;
const { PrimaryButton, SecondaryButton } = consumerMobile;

import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div className="container-fluid">
    <h1>PBG UI Library</h1>
    <p>Here's an example of component</p>

    <div className="col-12 p-5 w-50">
      <div className="row mb-4">
        <Banner text="Pay By Group Rules" />
      </div>
      <div className="row mb-3">
        <ActivityCard type="purchase_updated" title="Purchase Updated" time={new Date()}>
          <p>User changed the price from $2,000 to $20,000.</p>
        </ActivityCard>
      </div>
      <div className="row mb-3">
        <ActivityComment
          title="John Doe"
          comment="This is a longer user comment to demonstrate how the comment bubble should behave when there are multiple lines of text. Lorerm ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque."
          time={new Date()}
          userId="01234567-abcd-abcd-abcd-0123456789ab"
        />
      </div>
    </div>
    <div className="col-12 p-5 w-50">
      <div className="row mb-4">
        <PrimaryButton hint="With Hint" onClick={() => alert('clicked')}>
          Primary Button
        </PrimaryButton>
      </div>
      <div className="row mb-4">
        <SecondaryButton hint="With Hint" onClick={() => alert('clicked')}>
          Secondary Button
        </SecondaryButton>
      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
