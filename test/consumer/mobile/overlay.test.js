import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Overlay from '../../../components/consumer/mobile/overlay';

class OverlayWrapper extends React.Component {
  state = {
    overlayOpened: false
  };

  openOverlay = () => {
    this.setState({ overlayOpened: true });
  };

  hideOverlay = () => {
    this.setState({ overlayOpened: false });
  };

  render() {
    const { overlayOpened } = this.state;
    return <React.Fragment>
      <div id="open-button" onClick={this.openOverlay}>Open</div>
      <div id="hide-button" onClick={this.hideOverlay}>Hide</div>
      <Overlay
        opened={overlayOpened}
      />
    </React.Fragment>
  }
}

describe('Overlay', () => {
  it ('Should have correct class name', () => {
    const opened = true;
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={() => null} />);
    expect(wrapper.hasClass('pbg-overlay')).to.be.true;
  });

  it('Should have \'open\' class when Overlay opened', () => {
    const opened = true;
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={() => null} />);
    expect(wrapper.hasClass('open')).to.be.true;
  });

  it('Should\'n have \'open\' class when Overlay closed', () => {
    const wrapper = shallow(<Overlay title="Title" opened={false} onBackButtonClick={() => null} />);
    expect(wrapper.hasClass('open')).to.be.false;
  });

  it('Should render the correct title', () => {
    const opened = true;
    const title = 'Title';
    const wrapper = shallow(<Overlay title={title} opened onBackButtonClick={() => null} />);
    expect(wrapper.find('.pbg-overlay').contains(<div className="pbg-mobile-heading-1">{title}</div>)).to.be.true;
  });

  it('Should render the back button in header', () => {
    const opened = true;
    const onBackButtonClick = () => null;
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={onBackButtonClick} />);
    expect(wrapper.find('.pbg-overlay-inner--header').contains(<div className="pbg-mobile-label-link" onClick={onBackButtonClick}>&#60; Back</div>)).to.be.true;
  });

  it('Should render Back button in footer', () => {
    const opened = true;
    const onBackButtonClick = () => null;
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={onBackButtonClick} />);
    expect(wrapper.find('.pbg-overlay-inner--footer').contains(<div className="pbg-mobile-label-link" onClick={onBackButtonClick}>&#60; Back</div>)).to.be.true;
  });

  it('\'onBackButtonClick\' event should be triggered when header back button clicked', done => {
    const opened = true;
    const onBackButtonClick = () => {
      done();
    };
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={onBackButtonClick} />);
    wrapper
    .find('.pbg-overlay-inner--header')
    .find('.pbg-mobile-label-link')
    .simulate('click');
  });

  it('\'onBackButtonClick\' event should be triggered when footer back button clicked', done => {
    const opened = true;
    const onBackButtonClick = () => {
      done();
    };
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={onBackButtonClick} />);
    wrapper
    .find('.pbg-overlay-inner--footer')
    .find('.pbg-mobile-label-link')
    .simulate('click');
  });

  it('Should have opened as \'true\' when opened button clicked', () => {
    const wrapper = shallow(<OverlayWrapper />);
    wrapper
      .find('#open-button')
      .simulate('click');
    const overlay = wrapper.childAt(2);
    expect(overlay.props().opened).to.be.true;
  });

  it ('Should have opened as \'false\' when header back button clicked', () => {
    const wrapper = shallow(<OverlayWrapper />);
    wrapper
    .find('#open-button')
    .simulate('click');
    wrapper
      .find('#hide-button')
      .simulate('click');

    const overlay = wrapper.childAt(2);
    expect(overlay.props().opened).to.be.false;
  });

  it('Should not break when \'title\' is not present', () => {
    const opened = false;
    const wrapper = shallow(<Overlay opened onBackButtonClick={() => null} />);

    expect(wrapper.find('.pbg-overlay')).to.have.lengthOf(1);
  });

  it('Should not be rendered if \'onBackButtonClick\' is not present', () => {
    const opened = false;
    const wrapper = shallow(<Overlay opened />);
    expect(wrapper.find('.pbg-overlay')).to.have.lengthOf(0);
  });

  it('Should not break when \'opened\' is not present', () => {
    const wrapper = shallow(<Overlay />);
    expect(wrapper.find('.pbg-overlay')).to.have.lengthOf(0);
  });
});
