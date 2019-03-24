const homeController = (req, res) => {
  return res.status(200).send({
    message: "Online Courses!!!"
  });
};

export {homeController};
