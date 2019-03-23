const errorMessageConverter = (errors) => {
  if (!errors) {
    return [];
  }
  return errors.array().map(
    (item) => {
      return {
        value: item.value,
        msg: item.msg
      }
    }
  );
};

export default errorMessageConverter;