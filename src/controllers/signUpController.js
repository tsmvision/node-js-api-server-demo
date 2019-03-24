import {check} from "express-validator/check";
import {generateErrorMessageArray, hasValidateError, tokenGenerator} from '../common';
import {User} from '../models';


const signUpControllerValidation = [
    check("email")
      .isEmail()
      .withMessage("Id must be at least 5 character long."),

    check("firstName")
      .isLength({min: 1})
      .withMessage("First Name is required"),

    check("lastName")
      .isLength({min: 1})
      .withMessage("Last Name is required"),

    check("password")
      .isLength({min: 8})
      .withMessage("Pass word must be at least 8 character long.")
  ]
;

const signUpController = (req, res) => {
  const {email, firstName, lastName, password} = req.body;

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
        return User.create({email: email, firstName: firstName, lastName: lastName, password: password})
          .then(user => {
            // send success message with new token
            return res.status(201).json({
              message: `The user: ${email} registered successfully`,
              token: tokenGenerator({email, firstName, lastName})
            });
          });
      }
    );
};

export {
  signUpController,
  signUpControllerValidation
};