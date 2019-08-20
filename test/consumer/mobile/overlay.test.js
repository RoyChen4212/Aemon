import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Overlay from '../../../components/consumer/mobile/overlay';
import BackLink from '../../../components/consumer/mobile/back-link';

class OverlayWrapper extends React.Component {
  state = {
    overlayOpened: false,
  };

  openOverlay = () => {
    this.setState({ overlayOpened: true });
  };

  hideOverlay = () => {
    this.setState({ overlayOpened: false });
  };

  render() {
    const { overlayOpened } = this.state;
    return (
      <React.Fragment>
        <div id="open-button" onClick={this.openOverlay}>
          Open
        </div>
        <div id="hide-button" onClick={this.hideOverlay}>
          Hide
        </div>
        <Overlay opened={overlayOpened} onBackButtonClick={this.hideOverlay} />
      </React.Fragment>
    );
  }
}

const defaultBackButtonText = Overlay.defaultProps.backText;
const defaultTitle = Overlay.defaultProps.title;

describe('Overlay', () => {
  it('Should have correct class name', () => {
    const wrapper = shallow(<Overlay opened onBackButtonClick={() => null} />);
    expect(wrapper.hasClass('pbg-overlay')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<Overlay className={className} onBackButtonClick={() => null} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('Should have "open" class when Overlay opened', () => {
    const wrapper = shallow(<Overlay opened onBackButtonClick={() => null} />);
    expect(wrapper.hasClass('open')).to.be.true;
  });

  it('Should not have "open" class when Overlay closed', () => {
    const wrapper = shallow(<Overlay opened={false} onBackButtonClick={() => null} />);
    expect(wrapper.hasClass('open')).to.be.false;
  });

  it('Should render correct default title value', () => {
    const wrapper = shallow(<Overlay opened onBackButtonClick={() => null} />);
    expect(wrapper.find('.pbg-overlay').contains(<div className="pbg-mobile-heading-1">{defaultTitle}</div>)).to.be
      .true;
  });

  it('Should render the correct title', () => {
    const title = 'Overlay Title';
    const wrapper = shallow(<Overlay title={title} opened onBackButtonClick={() => null} />);
    expect(wrapper.find('.pbg-overlay').contains(<div className="pbg-mobile-heading-1">{title}</div>)).to.be.true;
  });

  it('should render children if given', () => {
    const wrapper = shallow(
      <Overlay title="Title" opened onBackButtonClick={() => null}>
        <p>Content</p>
      </Overlay>
    );
    expect(wrapper.find('.pbg-overlay-content').contains(<p>Content</p>)).to.be.true;
  });

  it('Should render the back button in header with default text', () => {
    const onBackButtonClick = () => null;
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={onBackButtonClick} />);
    expect(
      wrapper
        .find('.pbg-overlay-inner--header')
        .find(BackLink)
        .dive()
        .find('.pbg-mobile-label-link')
        .text()
    ).to.equal(defaultBackButtonText);
  });

  it('Should render Back button in footer with default text', () => {
    const onBackButtonClick = () => null;
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={onBackButtonClick} />);
    expect(
      wrapper
        .find('.pbg-overlay-inner--footer')
        .find(BackLink)
        .dive()
        .find('.pbg-mobile-label-link')
        .text()
    ).to.equal(defaultBackButtonText);
  });

  it('Should render header Back button with presented text', () => {
    const onBackButtonClick = () => null;
    const backText = 'Previous Screen';
    const wrapper = shallow(<Overlay opened backText={backText} onBackButtonClick={onBackButtonClick} />);
    expect(
      wrapper
        .find('.pbg-overlay-inner--header')
        .find(BackLink)
        .dive()
        .find('.pbg-mobile-label-link')
        .text()
    ).to.equal(backText);
  });

  it('Should render footer Back button with presented text', () => {
    const onBackButtonClick = () => null;
    const backText = 'Previous Screen';
    const wrapper = shallow(<Overlay opened backText={backText} onBackButtonClick={onBackButtonClick} />);
    expect(
      wrapper
        .find('.pbg-overlay-inner--footer')
        .find(BackLink)
        .dive()
        .find('.pbg-mobile-label-link')
        .text()
    ).to.equal(backText);
  });

  it('"onBackButtonClick" event should be triggered when header back button clicked', done => {
    const onBackButtonClick = () => {
      done();
    };
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={onBackButtonClick} />);
    wrapper
      .find('.pbg-overlay-inner--header')
      .find(BackLink)
      .dive()
      .find('.pbg-mobile-label-link')
      .simulate('click');
  });

  it('"onBackButtonClick" event should be triggered when footer back button clicked', done => {
    const onBackButtonClick = () => {
      done();
    };
    const wrapper = shallow(<Overlay title="Title" opened onBackButtonClick={onBackButtonClick} />);
    wrapper
      .find('.pbg-overlay-inner--footer')
      .find(BackLink)
      .dive()
      .find('.pbg-mobile-label-link')
      .simulate('click');
  });

  it('Should have opened as "true" when opened button clicked', () => {
    const wrapper = shallow(<OverlayWrapper />);
    wrapper.find('#open-button').simulate('click');
    const overlay = wrapper.childAt(2);
    expect(overlay.props().opened).to.be.true;
  });

  it('Should have opened as "false" when header back button clicked', () => {
    const wrapper = shallow(<OverlayWrapper />);
    wrapper.find('#open-button').simulate('click');
    wrapper.find('#hide-button').simulate('click');

    const overlay = wrapper.childAt(2);
    expect(overlay.props().opened).to.be.false;
  });

  it('Should not break when "title" is not present', () => {
    const wrapper = shallow(<Overlay opened onBackButtonClick={() => null} />);

    expect(wrapper.find('.pbg-overlay')).to.have.lengthOf(1);
  });

  it('Should not be rendered if "onBackButtonClick" is not present', () => {
    const wrapper = shallow(<Overlay opened />);
    expect(wrapper.find('.pbg-overlay')).to.have.lengthOf(0);
  });

  it('Should not break when "opened" is not present', () => {
    const wrapper = shallow(<Overlay />);
    expect(wrapper.find('.pbg-overlay')).to.have.lengthOf(0);
  });
});
