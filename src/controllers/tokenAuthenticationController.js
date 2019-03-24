import {tokenGenerator, isTokenValid, getEmailFromToken} from '../common'
import {check} from "express-validator/check";


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
  } else {

  }

  // check if this email exists in the database

  // extract email from token
  const emailFromToken = getEmailFromToken(token);

  // send updated token
  return res.status(200).send({
    message: "the token was verified",
    token: tokenGenerator({email: emailFromToken})
  });
};

export {
  tokenAuthenticationController,
  tokenAuthenticationControllerValidation
};