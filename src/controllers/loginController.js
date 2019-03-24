import {tokenGenerator} from '../common'

const loginController = (req, res) => {
  const {email, password} = req.body;

  //TODO: check if email exists in the db
  if (email === "lukelee111@gmail.com" && password === "password1") {
    return res.status(200).send({
      message: `${email} login successfully`,
      token: tokenGenerator({email})
    });
  }

  return res.status(400).send({
    message: "login failed"
  });
};

export {
  loginController
};