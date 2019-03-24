import jwt from 'jsonwebtoken';
import privateKey from "../config/privateKey";
import userRoleGenerator from './userRoleGenerator';


const tokenGenerator = ({email, role}) => {
  return jwt.sign(
    {
      email: email,
      role: userRoleGenerator(role),
    }, privateKey);
};

const isTokenValid = (token) => {
  return jwt.verify(token, privateKey, (err, decoded) => {
    if (err) {
      console.log("error: ", err);
      return false;
    }
    console.log("decoded: ", decoded);
    return true;
  });
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