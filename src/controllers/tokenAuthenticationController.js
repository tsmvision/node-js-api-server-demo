import {tokenGenerator, isTokenValid, getEmailFromToken} from '../common'
import {check} from "express-validator/check";
import {User} from '../models';


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
    return res.status(400).send({
      message: "token is not valid",
      token: ""
    });
  }

  // extract email from token
  const emailFromToken = getEmailFromToken(token);

  // check if this email exists in the database
  return User.findOne({
    where: {
      email: emailFromToken
    }
  }).then(
    (user) => {
      // throw error if email in the token doesn't exist in the db.
      if (!user) {
        return res.status(400).send({
          message: "The user in the token is not valid",
          token: ""
        });
      }
      // send updated token
      return res.status(200).send({
        message: "the token was verified",
        token: tokenGenerator({email: emailFromToken})
      });
    }
  );
};

export {
  tokenAuthenticationController,
  tokenAuthenticationControllerValidation
};