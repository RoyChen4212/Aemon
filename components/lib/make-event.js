export default (value) => {
  return {
    stopPropagation() {},
    preventDefault() {},
    target: { value },
  };
};
