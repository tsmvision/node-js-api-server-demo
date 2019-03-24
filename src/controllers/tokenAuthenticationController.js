import {tokenGenerator, isTokenValid, getDataFromToken, getInvalidTokenErrorMessage} from '../common'
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
  const {email, firstName, lastName} = getDataFromToken(token);

  // check if jwt is valid.
  if (!isTokenValid(token)) {
    return getInvalidTokenErrorMessage(res);
  }

  // check if this email exists in the database
  return User.findOne({
    where: {
      email: email
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
        token: tokenGenerator({email: email, firstName: firstName, lastName: lastName})
      });
    }
  );
};

export {
  tokenAuthenticationController,
  tokenAuthenticationControllerValidation
};