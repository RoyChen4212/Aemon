import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { fieldNames } from '../../../components/consumer/mobile/new-address-field/new-address-field';
import { TextField, Picker, NewAddressField } from '../../../components/consumer/mobile/form-fields';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import Hint from '../../../components/consumer/mobile/hint';

describe('NewAddressField', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<NewAddressField />);
    expect(wrapper.hasClass('pbg-new-address-field')).to.be.true;
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
        name: fieldNames.STREET_ADDRESS,
      });
      expect(streetAddress).to.have.lengthOf(1);
    });

    it('should have an streetAddress TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [fieldNames.STREET_ADDRESS]: expected }} />);
      const streetAddress = wrapper.find({
        type: 'text',
        name: fieldNames.STREET_ADDRESS,
      });
      expect(streetAddress.prop('placeholder')).to.be.equal(expected);
    });

    it('should pass the error to streetAddress TextField', () => {
      const expected = 'some error';
      const error = { [fieldNames.STREET_ADDRESS]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${fieldNames.STREET_ADDRESS}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.STREET_ADDRESS)).to.equal(expected);
      });
    });

    it('should pass the error to streetAddress TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [fieldNames.STREET_ADDRESS]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay label="some label" />);
      expect(wrapper.instance().extractError(fieldNames.STREET_ADDRESS)).to.equal(expected);
    });

    it('should not pass an error to streetAddress TextField if it has none', () => {
      const wrapper = mount(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${fieldNames.STREET_ADDRESS}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.STREET_ADDRESS)).to.be.undefined;
      });
    });
  });

  describe('City Text Field', () => {
    it('should have an city TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const city = wrapper.find({ type: 'text', name: fieldNames.CITY });
      expect(city).to.have.lengthOf(1);
    });

    it('should have an city TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [fieldNames.CITY]: expected }} />);
      const city = wrapper.find({ type: 'text', name: fieldNames.CITY });
      expect(city.prop('placeholder')).to.be.equal(expected);
    });

    it('should pass the error to city TextField', () => {
      const expected = 'some error';
      const error = { [fieldNames.CITY]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${fieldNames.CITY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.CITY)).to.be.equal(expected);
      });
    });

    it('should pass the error to city TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [fieldNames.CITY]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(fieldNames.CITY)).to.equal(expected);
    });

    it('should not pass an error to city TextField if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${fieldNames.CITY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.CITY)).to.be.undefined;
      });
    });
  });

  describe('State Text Field', () => {
    it('should have an state TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const state = wrapper.find({ type: 'text', name: fieldNames.STATE });
      expect(state).to.have.lengthOf(1);
    });

    it('should have an state TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [fieldNames.STATE]: expected }} />);
      const state = wrapper.find({ type: 'text', name: fieldNames.STATE });
      expect(state.prop('placeholder')).to.be.equal(expected);
    });

    it('should pass the error to state TextField', () => {
      const expected = 'some error';
      const error = { [fieldNames.STATE]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${fieldNames.STATE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.STATE)).to.be.equal(expected);
      });
    });

    it('should pass the error to state TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [fieldNames.STATE]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(fieldNames.STATE)).to.equal(expected);
    });

    it('should not pass an error to state TextField if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${fieldNames.STATE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.STATE)).to.be.undefined;
      });
    });
  });

  describe('Postal Code Text Field', () => {
    it('should have an postal code TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const postalCode = wrapper.find({
        type: 'text',
        name: fieldNames.POSTAL_CODE,
      });
      expect(postalCode).to.have.lengthOf(1);
    });

    it('should have an postal code TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [fieldNames.POSTAL_CODE]: expected }} />);
      const postalCode = wrapper.find({
        type: 'text',
        name: fieldNames.POSTAL_CODE,
      });
      expect(postalCode.prop('placeholder')).to.be.equal(expected);
    });

    it('should pass the error to postal code TextField', () => {
      const expected = 'some error';
      const error = { [fieldNames.POSTAL_CODE]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${fieldNames.POSTAL_CODE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.POSTAL_CODE)).to.be.equal(expected);
      });
    });

    it('should pass the error to state TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [fieldNames.POSTAL_CODE]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(fieldNames.POSTAL_CODE)).to.equal(expected);
    });

    it('should not pass an error to postal code TextField if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${fieldNames.POSTAL_CODE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.POSTAL_CODE)).to.be.undefined;
      });
    });
  });

  describe('Country Picker', () => {
    it('should have an country Picker', () => {
      const wrapper = mount(<NewAddressField />);
      const country = wrapper.find(Picker);
      expect(country).to.have.lengthOf(1);
      expect(country.prop('name')).to.equal(fieldNames.COUNTRY);
    });

    it('should have an country Picker with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [fieldNames.COUNTRY]: expected }} />);
      const country = wrapper.find(Picker);
      expect(country.prop('label')).to.be.equal(expected);
    });

    it('should pass the error to country Picker if it has one', () => {
      const expected = 'some error';
      const error = { [fieldNames.COUNTRY]: expected };
      const wrapper = shallow(<NewAddressField error={error} />);
      wrapper.setState({ [`${fieldNames.COUNTRY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.COUNTRY)).to.be.equal(expected);
      });
    });

    it('should pass the error to country Picker and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [fieldNames.COUNTRY]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(fieldNames.COUNTRY)).to.equal(expected);
    });

    it('should not pass an error to country Picker if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      expect(wrapper.instance().extractError(fieldNames.COUNTRY)).to.be.undefined;
      wrapper.setState({ [`${fieldNames.COUNTRY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(fieldNames.COUNTRY)).to.be.undefined;
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
          wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS }).simulate('change', event);
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
          wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS }).simulate('change', event);
        });

        it('should report correct value when streetAddress TextField changes', done => {
          const expected = { streetAddress: '742 Evergreen Terrace' };
          const event = { target: { value: expected.streetAddress } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS }).simulate('change', event);
        });

        it('should pass streetAddress value to text input when given', () => {
          const value = {
            streetAddress: '742 Evergreen Terrace',
          };
          const wrapper = mount(<NewAddressField value={value} />);
          expect(wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS }).prop('value')).to.equal(
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
          wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS }).simulate('blur');
        });
      });

      describe('City', () => {
        it('should execute onChange when city TextField changes', () => {
          const onChange = sinon.spy();
          const event = { target: { value: 'Springfield' } };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: fieldNames.CITY }).simulate('change', event);
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
          wrapper.find({ type: 'text', name: fieldNames.CITY }).simulate('change', event);
        });

        it('should report correct value when city TextField changes', done => {
          const expected = { city: 'Springfield' };
          const event = { target: { value: expected.city } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: fieldNames.CITY }).simulate('change', event);
        });

        it('should pass city value to text input when given', () => {
          const value = {
            city: 'Springfield',
          };
          const wrapper = mount(<NewAddressField value={value} />);
          expect(wrapper.find({ type: 'text', name: fieldNames.CITY }).prop('value')).to.equal(value.city);
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
          wrapper.find({ type: 'text', name: fieldNames.CITY }).simulate('blur');
        });
      });

      describe('State', () => {
        it('should execute onChange when state TextField changes', () => {
          const onChange = sinon.spy();
          const event = { target: { value: 'Oregon' } };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: fieldNames.STATE }).simulate('change', event);
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
          wrapper.find({ type: 'text', name: fieldNames.STATE }).simulate('change', event);
        });

        it('should report correct value when state TextField changes', done => {
          const expected = { state: 'Oregon' };
          const event = { target: { value: expected.state } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: fieldNames.STATE }).simulate('change', event);
        });

        it('should pass state value to text input when given', () => {
          const value = {
            state: 'Ohio',
          };
          const wrapper = mount(<NewAddressField value={value} />);
          expect(wrapper.find({ type: 'text', name: fieldNames.STATE }).prop('value')).to.equal(value.state);
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
          wrapper.find({ type: 'text', name: fieldNames.STATE }).simulate('blur');
        });
      });

      describe('Postal Code', () => {
        it('should execute onChange when postalCode TextField changes', () => {
          const onChange = sinon.spy();
          const event = { target: { value: '555636' } };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE }).simulate('change', event);
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
          wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE }).simulate('change', event);
        });

        it('should report correct value when postalCode TextField changes', done => {
          const expected = { postalCode: '555636' };
          const event = { target: { value: expected.postalCode } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} />);
          wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE }).simulate('change', event);
        });

        it('should pass postalCode value to text input when given', () => {
          const value = {
            postalCode: 'Springfield',
          };
          const wrapper = mount(<NewAddressField value={value} />);
          expect(wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE }).prop('value')).to.equal(value.postalCode);
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
          wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE }).simulate('blur');
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
          wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${fieldNames.STREET_ADDRESS}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[`${fieldNames.STREET_ADDRESS}Touched`]).to.be.false;
          wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS }).simulate('blur');
          expect(wrapper.state()[`${fieldNames.STREET_ADDRESS}Touched`]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [fieldNames.STREET_ADDRESS]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(fieldNames.STREET_ADDRESS)).to.be.undefined;
          wrapper.find({ type: 'text', name: fieldNames.STREET_ADDRESS }).simulate('blur');
          expect(wrapper.instance().extractError(fieldNames.STREET_ADDRESS)).to.equal(error[fieldNames.STREET_ADDRESS]);
        });
      });

      describe('City', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: fieldNames.CITY }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${fieldNames.CITY}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find({ type: 'text', name: fieldNames.CITY }).simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [fieldNames.CITY]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(fieldNames.CITY)).to.be.undefined;
          wrapper.find({ type: 'text', name: fieldNames.CITY }).simulate('blur');
          expect(wrapper.instance().extractError(fieldNames.CITY)).to.equal(error[fieldNames.CITY]);
        });
      });

      describe('State', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: fieldNames.STATE }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${fieldNames.STATE}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find({ type: 'text', name: fieldNames.STATE }).simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [fieldNames.STATE]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(fieldNames.STATE)).to.be.undefined;
          wrapper.find({ type: 'text', name: fieldNames.STATE }).simulate('blur');
          expect(wrapper.instance().extractError(fieldNames.STATE)).to.equal(error[fieldNames.STATE]);
        });
      });

      describe('Postal Code', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${fieldNames.POSTAL_CODE}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE }).simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [fieldNames.POSTAL_CODE]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(fieldNames.POSTAL_CODE)).to.be.undefined;
          wrapper.find({ type: 'text', name: fieldNames.POSTAL_CODE }).simulate('blur');
          expect(wrapper.instance().extractError(fieldNames.POSTAL_CODE)).to.equal(error[fieldNames.POSTAL_CODE]);
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
          const touchState = `${fieldNames.COUNTRY}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find('select').simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [fieldNames.COUNTRY]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(fieldNames.COUNTRY)).to.be.undefined;
          wrapper.find('select').simulate('blur');
          expect(wrapper.instance().extractError(fieldNames.COUNTRY)).to.equal(error[fieldNames.COUNTRY]);
        });
      });
    });
  });
});
