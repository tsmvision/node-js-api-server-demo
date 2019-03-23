const homeController = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }

  res.status(200).send({
    message: "Hello World!"
  });
};



export {homeController};
