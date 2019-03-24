import {check} from "express-validator/check";
import {generateErrorMessageArray, hasValidateError, tokenGenerator} from '../common';


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

  return res.status(201).json({
    message: "The user registered successfully",
    token: tokenGenerator({email})
  });
};

export {
  registerUserController,
  registerUserControllerValidation
};