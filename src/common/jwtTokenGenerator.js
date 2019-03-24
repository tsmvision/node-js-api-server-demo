import jwt from 'jsonwebtoken';
import privateKey from "../privateKey";
import userRoleGenerator from './userRoleGenerator';


const tokenGenerator = ({email, role}) => {

  return jwt.sign(
    {
      email: email,
      role: userRoleGenerator(role),
    }, privateKey);
};

export default tokenGenerator;