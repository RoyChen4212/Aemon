import { expect } from 'chai';
import makeEvent from '../../../components/lib/make-event';

describe('Make Event', () => {
  it('returns event like object with target.value', () => {
    const value = 'Hi';
    const expected = { value };
    expect(makeEvent(value).target).include(expected);
  });

  it('returns event like object with preventDefault function', () => {
    const value = 'Hi';
    expect(makeEvent(value)).respondTo('preventDefault');
    expect(makeEvent(value).preventDefault()).to.be.undefined;
  });

  it('returns event like object with stopPropagation function', () => {
    const value = 'Hi';
    expect(makeEvent(value)).respondTo('stopPropagation');
    expect(makeEvent(value).stopPropagation()).to.be.undefined;
  });
});
