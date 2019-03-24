import jwt from 'jsonwebtoken';


const tokenGenerator = ({email}) => {

  return jwt.sign({
    email: email,
    foo: "bar"
  }, "shhhhh");
};

export default tokenGenerator;