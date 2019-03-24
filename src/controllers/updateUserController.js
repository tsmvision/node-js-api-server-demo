import {check} from "express-validator/check";
import {
  // generateErrorMessageArray,
  // hasValidateError,
  tokenGenerator,
  // getDataFromToken,
  getEmailFromToken
} from '../common';
import {User} from '../models';


const updateUserControllerValidation = [
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

const updateUserController = (req, res) => {
  const token = req.get("Authorization");
  const emailFromToken = getEmailFromToken(token);
  const {email, firstName, lastName, password} = req.body;

  const updatedValue = {};
  if (email) {
    updatedValue.email = email;
  }
  if (firstName) {
    updatedValue.firstName = firstName;
  }
  if (lastName) {
    updatedValue.lastName = lastName;
  }
  if (password) {
    updatedValue.password = password;
  }

  // console.log("updatedValue: ", updatedValue);

  // if (hasValidateError(req)) {
  //   return generateErrorMessageArray(req, res);
  // }

  return User
    .findOne({where: {email: emailFromToken}})
    .then((user) => {
      // if existing user found, send error.
      if (!user) {
        return res.status(400).json({
          message: `The user: ${email} already exists, please try again.`,
          token: ""
        });
      }
      return user
    })
    .then((user) => {
      const newEmail = email ? email : emailFromToken;
      const newFirstName = firstName ? firstName : user.firstName;
      const newLastName = lastName ? lastName : user.lastName;
      // const newPassword = password ? password: user.password;

      return User.update({
       updatedValue
      }, {where: {email: emailFromToken}})
        .then(
          user => {
            return res.status(201).json({
              message: `The user: ${email} was updated successfully.`,
              token: tokenGenerator({email: newEmail, firstName: newFirstName, lastName: newLastName})
            });
          }
        );
    });
};


export {
  updateUserController,
  updateUserControllerValidation
};