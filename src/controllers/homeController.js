const homeController = (req, res) => {
  res.status(200).send({
    message: "Hello World!"
  });
};

export default homeController;
