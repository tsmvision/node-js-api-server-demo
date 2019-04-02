import {check} from "express-validator/check";
import {
  // generateErrorMessageArray,
  getInvalidTokenErrorMessage,
  // hasValidateError,
  isTokenValid,
  // tokenGenerator
} from '../common';
// import {User} from '../models';

import {allServicesData, recentlyVisitedServicesData, buildASolutionData, learntoBuildData} from '../common/data';


// const addUserControllerValidation = [
//     check("email")
//       .isEmail()
//       .withMessage("Id must be at least 5 character long."),
//
//     check("firstName")
//       .isLength({min: 1})
//       .withMessage("First Name is required"),
//
//     check("lastName")
//       .isLength({min: 1})
//       .withMessage("Last Name is required"),
//
//     check("password")
//       .isLength({min: 8})
//       .withMessage("Pass word must be at least 8 character long.")
//   ]
// ;

const getDashboardDataController = (req, res) => {
  // check if jwt is valid.
  const token = req.get("Authorization");

  // check if jwt is valid.
  if (!isTokenValid(token)) {
    return getInvalidTokenErrorMessage(res);
  }

  // if (hasValidateError(req)) {
  //   return generateErrorMessageArray(req, res);
  // }

  return res.status(200).send(
    {
      allServices: allServicesData,
      recentlyVisitedServices: recentlyVisitedServicesData,
      buildASolution: buildASolutionData,
      learnToBuild: learntoBuildData
    }
  );

  // return User
  //   .findOne({where: {email: email}})
  //   .then((item) => {
  //       // if existing user found, send error.
  //       if (item) {
  //         return res.status(400).json({
  //           message: `The user: ${email} already exists, please try again.`,
  //           token: ""
  //         });
  //       }
  //
  //       // generate new user
  //       return User.create({email: email, firstName: firstName, lastName: lastName, password: password})
  //         .then(user => {
  //           // send success message with new token
  //           return res.status(201).json({
  //             message: `The user: ${email} registered successfully`,
  //             token: tokenGenerator({email, firstName, lastName})
  //           });
  //         });
  //     }
  //   );
};

export {
  getDashboardDataController
};