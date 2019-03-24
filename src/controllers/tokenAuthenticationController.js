import {tokenGenerator, isTokenValid, getEmailFromToken} from '../common'
import {check} from "express-validator/check";
// import {generateErrorMessageArray, hasValidateError} from '../common';


const tokenAuthenticationControllerValidation = [
  check("email")
    .isEmail()
    .withMessage("Email is not valid.")
];

const tokenAuthenticationController = (req, res) => {
  // get token stored in the request headers.
  const token = req.get("Authorization") ? req.get("Authorization") : "";

  // check if jwt is valid.
  if (!isTokenValid(token)) {
    res.status(200).send({
        message: "token is not valid",
        token: ""
      });
  }

  // check email in the database

  // extract email from token
  const emailFromToken = getEmailFromToken(token);

  // send updated token
  res.status(200).send({
    token: tokenGenerator({email: emailFromToken})
  });
};

export {
  tokenAuthenticationController,
  tokenAuthenticationControllerValidation
};