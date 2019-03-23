import {check, validationResult} from "express-validator/check";

const registerUserControllerValidation = [
  check("id").isLength({min: 5}),
  check("password").isLength({min: 5})
];

const registerUserController = (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // console.log("req.body: ", req.body)
  res.status(201).json({
    message: "user regisistered successfully",
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