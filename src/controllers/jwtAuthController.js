import {jwtTokenGenerator} from '../common'
import {check} from "express-validator/check";
import {generateErrorMessageArray, hasValidateError} from '../common';


const jwtAuthControllerValidation = [
  check("email")
    .isEmail()
    .withMessage("Email is not valid.")
];

const jwtAuthController = (req, res) => {
  const {email} = req.body;
  if (hasValidateError(req)) {
    return generateErrorMessageArray(req, res);
  }

  res.status(200).send({
    token: jwtTokenGenerator(email)
  });
};

export {
  jwtAuthController,
  jwtAuthControllerValidation
};