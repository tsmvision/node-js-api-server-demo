import {check} from "express-validator/check";
import {
  // generateErrorMessageArray,
  // hasValidateError,
  tokenGenerator,
  // getDataFromToken,
  getEmailFromToken, isTokenValid, getDataFromToken
} from '../common';
import {User} from '../models';


const deleteUserControllerValidation = [
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
];

const deleteUserController = (req, res) => {

  // check if jwt is valid.
  const token = req.get("Authorization");
  const {email, firstName, lastName} = getDataFromToken(token);

  if (!isTokenValid(token)) {
    return res.status(400).send({
      message: "token is not valid",
      token: ""
    });
  }

  const {id} = req.params;
  if (!id) {
    return res.status(400).json({
      message: `The userId not found, please try again.`,
      token: ""
    });
  }

  // if (hasValidateError(req)) {
  //   return generateErrorMessageArray(req, res);
  // }

  return User
    .findOne({where: {id: id}})
    .then((user) => {
      // if existing user found, send error.
      if (!user) {
        return res.status(400).json({
          message: `the id doesn't exist, please try again.`,
          token: token
        });
      }
      return user
    })
    .then((user) => {
      return User.destroy({where: {id: id}})
        .then((deletedUser) => {

            const deletedEmail = user.get("email");
            return res.status(201).json({
              message: `The user(Id: ${id}, email: ${deletedEmail}) was deleted successfully.`,
              token: tokenGenerator({email: email, firstName: firstName, lastName: lastName})
            });
          }
        );
    });
};


export {
  deleteUserController,
  deleteUserControllerValidation
};