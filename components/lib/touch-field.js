import makeEvent from './make-event';

export default function(newState) {
  this.setState(newState, () => {
    this.onBlur(makeEvent(this.props.value));
    this.forceUpdate();
  });
};
