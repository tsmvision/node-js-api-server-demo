import {tokenGenerator} from '../common'
import {User} from '../models';

const loginController = (req, res) => {
  const {email, password} = req.body;

  return User.findOne({
    where: {
      email: email,
      password: password
    }
  }).then(
    (user) => {
      // check if the user exists.
      if (user) {

        return res.status(200).send({
          message: `${email} was logged in successfully`,
          token: tokenGenerator({
            email: user.get("email"),
            firstName: user.get("firstName"),
            lastName: user.get("lastName"),
          })
        });
      }

      return res.status(400).send({
        message: "login failed",
        token: ""
      });
    }
  );
};

export {
  loginController
};