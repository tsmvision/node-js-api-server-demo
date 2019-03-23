import express from 'express';


const router = express.Router();

const homeRoute = router.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World!"
  });
});

const registerUserRoute = router.post("/register-user", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  // console.log("req.body: ", req.body);

  res.status(201).json({
    message: "user regisistered successfully",
    data: {
      id,
      password
    }
  });
});

export {
  homeRoute,
  registerUserRoute
}