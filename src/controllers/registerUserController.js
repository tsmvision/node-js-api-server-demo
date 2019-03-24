import {check} from "express-validator/check";
import {generateErrorMessageArray, hasValidateError, jwtTokenGenerator} from '../common';


const registerUserControllerValidation = [
  check("email")
    .isEmail()
    .withMessage("Id must be at least 5 character long."),

  check("password")
    .isLength({min: 8})
    .withMessage("Pass word must be at least 8 character long.")
];

const registerUserController = (req, res) => {
  const {email, password} = req.body;

  if (hasValidateError(req)) {
    return generateErrorMessageArray(req, res);
  }

  res.status(201).json({
    message: "The user registered successfully",
    token: jwtTokenGenerator({email})
  });
};

export {
  registerUserController,
  registerUserControllerValidation
};