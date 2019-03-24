import jwt from 'jsonwebtoken';
import privateKey from "../config/privateKey";
import userRoleGenerator from './userRoleGenerator';


const tokenGenerator = ({email, firstName, lastName, role}) => {
  if (!email || !firstName || !lastName) {
    console.log("insufficient parameters in tokenGenerator.")
    return ""
  }

  return jwt.sign(
    {
      email: email,
      firstName: firstName,
      lastName: lastName,
      role: userRoleGenerator(role),
    }, privateKey);
};

const isTokenValid = (token) => {
  return jwt.verify(token, privateKey, (err, decoded) => {
    if (err) {
      console.log("error: ", err);
      return false;
    }
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

const getDataFromToken = (token) => {
  if (!token) {
    return null;
  }
  const data = jwt.decode(token);
  return data ? data: {};
};

export {
  tokenGenerator,
  isTokenValid,
  getEmailFromToken,
  getDataFromToken
};