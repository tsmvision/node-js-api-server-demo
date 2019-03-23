const registerUserController = (req, res) => {
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
};

export default registerUserController;