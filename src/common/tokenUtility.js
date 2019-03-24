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

const isTokenValid = (token) => {
  return jwt.verify(token, privateKey);
};

const getEmailFromToken = (token) => {
  if (!token) {
    return null;
  }
  const emailFromToken = jwt.decode(token).email;

  return emailFromToken ? emailFromToken : "";
};

export {
  tokenGenerator,
  isTokenValid,
  getEmailFromToken
};