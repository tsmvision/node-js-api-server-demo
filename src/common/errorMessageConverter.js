import {validationResult} from "express-validator/check";
import {isTokenValid} from "./tokenUtility";

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


const getInvalidTokenErrorMessage = (res) => {
  return res.status(400).send({
    message: "token is not valid",
    token: ""
  });
};

export {
  hasValidateError,
  errorMessageConverter,
  generateErrorMessageArray,
  getInvalidTokenErrorMessage
};