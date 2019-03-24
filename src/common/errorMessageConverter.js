import {validationResult} from "express-validator/check";

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

const hasValidateError = (req) => {
  return !validationResult(req).isEmpty();
};

const generateErrorMessageArray = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errorMessageConverter(errors)});
  }

  return null;
};

export {
  hasValidateError,
  errorMessageConverter,
  generateErrorMessageArray
};