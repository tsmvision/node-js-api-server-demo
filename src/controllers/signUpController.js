import {check} from "express-validator/check";
import {generateErrorMessageArray, hasValidateError, tokenGenerator} from '../common';
import {User} from '../models';


const signUpControllerValidation = [
  check("email")
    .isEmail()
    .withMessage("Id must be at least 5 character long."),

  check("password")
    .isLength({min: 8})
    .withMessage("Pass word must be at least 8 character long.")
];

const signUpController = (req, res) => {
  const {email, password} = req.body;

  if (hasValidateError(req)) {
    return generateErrorMessageArray(req, res);
  }

  return User
    .findOne({where: {email: email}})
    .then((item) => {
      // if existing user found, send error.
        if (item) {
          return res.status(400).json({
            message: `The user: ${email} already exists, please try again.`,
            token: ""
          });
        }

        // generate new user
        User.create({email: email, password: password})
          .then( data => data.toJSON())
          .then( data => {
            console.log("email: ", data.email);
            console.log("password: ", data.password);
          });

        // send success message with new token
        return res.status(201).json({
          message: `The user: ${email} registered successfully`,
          token: tokenGenerator({email})
        });
      }
    );
};

export {
  signUpController,
  signUpControllerValidation
};