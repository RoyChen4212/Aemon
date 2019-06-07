export default value => {
  return {
    target: { value },
    stopPropagation: () => {},
    preventDefault: () => {},
  };
};
