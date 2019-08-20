import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import NewAddressField, { addressFields } from '../../../components/consumer/mobile/new-address-field';
import Picker from '../../../components/consumer/mobile/picker';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import Hint from '../../../components/consumer/mobile/hint';

describe('NewAddressField', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<NewAddressField />);
    expect(wrapper.hasClass('pbg-new-address-field')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<NewAddressField className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have label if given', () => {
    const label = 'a label';
    const wrapper = shallow(<NewAddressField label={label} />);
    expect(wrapper.contains(<Label type={labelTypes.STRONG}>{label}</Label>)).to.be.true;
  });

  it('should have a hint if given', () => {
    const hint = 'some hint';
    const wrapper = shallow(<NewAddressField hint={hint} label="some label" />);
    expect(wrapper.contains(<Hint>{hint}</Hint>)).to.be.true;
  });

  describe('Street Address Text Field', () => {
    it('should have an streetAddress TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const streetAddress = wrapper.find({
        type: 'text',
        name: addressFields.STREET_ADDRESS,
      });
      expect(streetAddress).to.have.lengthOf(1);
    });

    it('should have an streetAddress TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.STREET_ADDRESS]: expected }} />);
      const streetAddress = wrapper.find({
        type: 'text',
        name: addressFields.STREET_ADDRESS,
      });
      expect(streetAddress.prop('placeholder')).to.be.equal(expected);
    });

    it('should pass the error to streetAddress TextField', () => {
      const expected = 'some error';
      const error = { [addressFields.STREET_ADDRESS]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.STREET_ADDRESS}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.equal(expected);
      });
    });

    it('should pass the error to streetAddress TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.STREET_ADDRESS]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay label="some label" />);
      expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.equal(expected);
    });

    it('should not pass an error to streetAddress TextField if it has none', () => {
      const wrapper = mount(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${addressFields.STREET_ADDRESS}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.be.null;
      });
    });
  });

  describe('City Text Field', () => {
    it('should have an city TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const city = wrapper.find({ type: 'text', name: addressFields.CITY });
      expect(city).to.have.lengthOf(1);
    });

    it('should have an city TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.CITY]: expected }} />);
      const city = wrapper.find({ type: 'text', name: addressFields.CITY });
      expect(city.prop('placeholder')).to.be.equal(expected);
    });

    it('should pass the error to city TextField', () => {
      const expected = 'some error';
      const error = { [addressFields.CITY]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.CITY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.CITY)).to.be.equal(expected);
      });
    });

    it('should pass the error to city TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.CITY]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(addressFields.CITY)).to.equal(expected);
    });

    it('should not pass an error to city TextField if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${addressFields.CITY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.CITY)).to.be.null;
      });
    });
  });

  describe('State Text Field', () => {
    it('should have an state TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const state = wrapper.find({ type: 'text', name: addressFields.STATE });
      expect(state).to.have.lengthOf(1);
    });

    it('should have an state TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.STATE]: expected }} />);
      const state = wrapper.find({ type: 'text', name: addressFields.STATE });
      expect(state.prop('placeholder')).to.be.equal(expected);
    });

    it('should pass the error to state TextField', () => {
      const expected = 'some error';
      const error = { [addressFields.STATE]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.STATE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.STATE)).to.be.equal(expected);
      });
    });

    it('should pass the error to state TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.STATE]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(addressFields.STATE)).to.equal(expected);
    });

    it('should not pass an error to state TextField if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${addressFields.STATE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.STATE)).to.be.null;
      });
    });
  });

  describe('Postal Code Text Field', () => {
    it('should have an postal code TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const postalCode = wrapper.find({
        type: 'text',
        name: addressFields.POSTAL_CODE,
      });
      expect(postalCode).to.have.lengthOf(1);
    });

    it('should have an postal code TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.POSTAL_CODE]: expected }} />);
      const postalCode = wrapper.find({
        type: 'text',
        name: addressFields.POSTAL_CODE,
      });
      expect(postalCode.prop('placeholder')).to.be.equal(expected);
    });

    it('should pass the error to postal code TextField', () => {
      const expected = 'some error';
      const error = { [addressFields.POSTAL_CODE]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.POSTAL_CODE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.be.equal(expected);
      });
    });

    it('should pass the error to state TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.POSTAL_CODE]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.equal(expected);
    });

    it('should not pass an error to postal code TextField if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${addressFields.POSTAL_CODE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.be.null;
      });
    });
  });

  describe('Country Picker', () => {
    it('should have an country Picker', () => {
      const wrapper = mount(<NewAddressField />);
      const country = wrapper.find(Picker);
      expect(country).to.have.lengthOf(1);
      expect(country.prop('name')).to.equal(addressFields.COUNTRY);
    });

    it('should have an country Picker with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.COUNTRY]: expected }} />);
      const country = wrapper.find(Picker);
      expect(country.prop('label')).to.be.equal(expected);
    });

    it('should pass the error to country Picker if it has one', () => {
      const expected = 'some error';
      const error = { [addressFields.COUNTRY]: expected };
      const wrapper = shallow(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.COUNTRY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.be.equal(expected);
      });
    });

    it('should pass the error to country Picker and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.COUNTRY]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.equal(expected);
    });

    it('should not pass an error to country Picker if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.be.null;
      wrapper.setState({ [`${addressFields.COUNTRY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.be.null;
      });
    });

    it('should pass given options to country picker', () => {
      const options = [{ label: 'MX', value: 'mx' }, { label: 'US', value: 'us' }];
      const wrapper = shallow(<NewAddressField countryOptions={options} onChange={() => {}} />);
      expect(wrapper.instance().countryOptions).to.be.equal(options);
    });
  });

  describe('Composed behaviour', () => {
    describe('Updating value', () => {
      const initialValue = {
        streetAddress: 'Some address',
        city: 'Some city',
        state: 'Some state',
        postalCode: '00000',
        country: 'some country',
      };

      describe('Street Address', () => {
        it('should execute onChange when streetAddress TextField changes', () => {
          const onChange = sinon.spy();
          const event = { target: { value: '742 Evergreen Terrace' } };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('change', event);
          expect(onChange.calledOnce).to.be.true;
        });

        it('should report correct value when streetAddress TextField changes', done => {
          const event = { target: { value: '742 Evergreen Terrace' } };
          const onChange = ev => {
            const expected = {
              ...initialValue,
              streetAddress: '742 Evergreen Terrace',
            };
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} value={initialValue} />);
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('change', event);
        });

        it('should report correct value when streetAddress TextField changes', done => {
          const expected = { streetAddress: '742 Evergreen Terrace' };
          const event = { target: { value: expected.streetAddress } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('change', event);
        });

        it('should pass streetAddress value to text input when given', () => {
          const value = {
            streetAddress: '742 Evergreen Terrace',
          };
          const wrapper = mount(<NewAddressField value={value} />);
          expect(wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).prop('value')).to.equal(
            value.streetAddress
          );
        });

        it('should execute onBlur with current value when streetAddress is blurred', done => {
          const value = {
            streetAddress: '742 Evergreen Terrace',
            city: 'Springfield',
          };
          const onBlur = ev => {
            expect(ev.target.value).to.eql(value);
            done();
          };
          const wrapper = mount(<NewAddressField value={value} onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('blur');
        });
      });

      describe('City', () => {
        it('should execute onChange when city TextField changes', () => {
          const onChange = sinon.spy();
          const event = { target: { value: 'Springfield' } };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('change', event);
          expect(onChange.calledOnce).to.be.true;
        });

        it('should report correct value when city TextField changes', done => {
          const event = { target: { value: 'Springfield' } };
          const onChange = ev => {
            const expected = { ...initialValue, city: 'Springfield' };
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} value={initialValue} />);
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('change', event);
        });

        it('should report correct value when city TextField changes', done => {
          const expected = { city: 'Springfield' };
          const event = { target: { value: expected.city } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('change', event);
        });

        it('should pass city value to text input when given', () => {
          const value = {
            city: 'Springfield',
          };
          const wrapper = mount(<NewAddressField value={value} />);
          expect(wrapper.find({ type: 'text', name: addressFields.CITY }).prop('value')).to.equal(value.city);
        });

        it('should execute onBlur with current value when city is blurred', done => {
          const value = {
            streetAddress: '742 Evergreen Terrace',
            city: 'Springfield',
          };
          const onBlur = ev => {
            expect(ev.target.value).to.eql(value);
            done();
          };
          const wrapper = mount(<NewAddressField value={value} onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('blur');
        });
      });

      describe('State', () => {
        it('should execute onChange when state TextField changes', () => {
          const onChange = sinon.spy();
          const event = { target: { value: 'Oregon' } };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('change', event);
          expect(onChange.calledOnce).to.be.true;
        });

        it('should report correct value when state TextField changes', done => {
          const event = { target: { value: 'Oregon' } };
          const onChange = ev => {
            const expected = { ...initialValue, state: 'Oregon' };
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} value={initialValue} />);
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('change', event);
        });

        it('should report correct value when state TextField changes', done => {
          const expected = { state: 'Oregon' };
          const event = { target: { value: expected.state } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('change', event);
        });

        it('should pass state value to text input when given', () => {
          const value = {
            state: 'Ohio',
          };
          const wrapper = mount(<NewAddressField value={value} />);
          expect(wrapper.find({ type: 'text', name: addressFields.STATE }).prop('value')).to.equal(value.state);
        });

        it('should execute onBlur with current value when state is blurred', done => {
          const value = {
            streetAddress: '742 Evergreen Terrace',
            city: 'Springfield',
          };
          const onBlur = ev => {
            expect(ev.target.value).to.eql(value);
            done();
          };
          const wrapper = mount(<NewAddressField value={value} onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('blur');
        });
      });

      describe('Postal Code', () => {
        it('should execute onChange when postalCode TextField changes', () => {
          const onChange = sinon.spy();
          const event = { target: { value: '555636' } };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('change', event);
          expect(onChange.calledOnce).to.be.true;
        });

        it('should report correct value when postalCode TextField changes', done => {
          const event = { target: { value: '555636' } };
          const onChange = ev => {
            const expected = { ...initialValue, postalCode: '555636' };
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} value={initialValue} />);
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('change', event);
        });

        it('should report correct value when postalCode TextField changes', done => {
          const expected = { postalCode: '555636' };
          const event = { target: { value: expected.postalCode } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('change', event);
        });

        it('should pass postalCode value to text input when given', () => {
          const value = {
            postalCode: 'Springfield',
          };
          const wrapper = mount(<NewAddressField value={value} />);
          expect(wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).prop('value')).to.equal(
            value.postalCode
          );
        });

        it('should execute onBlur with current value when postalCode is blurred', done => {
          const value = {
            streetAddress: '742 Evergreen Terrace',
            city: 'Springfield',
          };
          const onBlur = ev => {
            expect(ev.target.value).to.eql(value);
            done();
          };
          const wrapper = mount(<NewAddressField value={value} onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('blur');
        });
      });

      describe('Country', () => {
        it('should execute onChange when country TextField changes', () => {
          const onChange = sinon.spy();
          const event = { target: { value: 'US' } };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find('select').simulate('change', event);
          expect(onChange.calledOnce).to.be.true;
        });

        it('should report correct value when country TextField changes', done => {
          const event = { target: { value: 'US' } };
          const onChange = ev => {
            const expected = { ...initialValue, country: 'US' };
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} value={initialValue} />);
          wrapper.find('select').simulate('change', event);
        });

        it('should report correct value when country TextField changes', done => {
          const expected = { country: 'US' };
          const event = { target: { value: expected.country } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find('select').simulate('change', event);
        });

        it('should pass country value to picker when given', () => {
          const options = [{ label: 'MX', value: 'mx' }, { label: 'US', value: 'us' }];
          const value = {
            country: 'us',
          };
          const wrapper = mount(<NewAddressField countryOptions={options} value={value} />);
          expect(wrapper.find(Picker).prop('value')).to.equal(value.country);
        });
      });
    });

    describe('Touching', () => {
      describe('Street Address', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[`${addressFields.STREET_ADDRESS}Touched`]).to.be.false;
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('blur');
          expect(wrapper.state()[`${addressFields.STREET_ADDRESS}Touched`]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [addressFields.STREET_ADDRESS]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.be.null;
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('blur');
          expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.equal(
            error[addressFields.STREET_ADDRESS]
          );
        });
      });

      describe('City', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${addressFields.CITY}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [addressFields.CITY]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(addressFields.CITY)).to.be.null;
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('blur');
          expect(wrapper.instance().extractError(addressFields.CITY)).to.equal(error[addressFields.CITY]);
        });
      });

      describe('State', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${addressFields.STATE}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [addressFields.STATE]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(addressFields.STATE)).to.be.null;
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('blur');
          expect(wrapper.instance().extractError(addressFields.STATE)).to.equal(error[addressFields.STATE]);
        });
      });

      describe('Postal Code', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${addressFields.POSTAL_CODE}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [addressFields.POSTAL_CODE]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.be.null;
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('blur');
          expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.equal(error[addressFields.POSTAL_CODE]);
        });
      });

      describe('Country', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find('select').simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${addressFields.COUNTRY}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find('select').simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [addressFields.COUNTRY]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.be.null;
          wrapper.find('select').simulate('blur');
          expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.equal(error[addressFields.COUNTRY]);
        });
      });
    });
  });
});
