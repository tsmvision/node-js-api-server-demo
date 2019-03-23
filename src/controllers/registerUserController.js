import {check, validationResult} from "express-validator/check";
import errorMessageConverter from '../common/errorMessageConverter';


const registerUserControllerValidation = [
  check("id")
    .isLength({min: 5})
    .withMessage("Id must be at least 5 character long."),

  check("password")
    .isLength({min: 8})
    .withMessage("Pass word must be at least 8 character long.")
];

const registerUserController = (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errorMessageConverter(errors)});
  }

  res.status(201).json({
    message: "The user registered successfully",
    data: {
      id,
      password
    }
  });
};

export {
  registerUserController,
  registerUserControllerValidation
};