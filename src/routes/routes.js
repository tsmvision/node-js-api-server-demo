import express from 'express';

import {
  homeController,
  loginController,
  signUpController,
  signUpControllerValidation,
  tokenAuthenticationController,
  tokenAuthenticationControllerValidation
} from '../controllers'

const router = express.Router();

const homeRoute = router.get("/", homeController);
const loginRoute = router.post("/login", loginController);
const registerUserRoute = router.post("/signup", signUpControllerValidation, signUpController);
const tokenAuthRoute = router.post("/auth", tokenAuthenticationControllerValidation, tokenAuthenticationController);

export {
  homeRoute,
  loginRoute,
  registerUserRoute,
  tokenAuthRoute
}