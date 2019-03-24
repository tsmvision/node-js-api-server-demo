const homeController = (req, res) => {
  return res.status(200).send({
    message: "Hello World!"
  });
};

export {homeController};
