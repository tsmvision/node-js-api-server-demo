import express from 'express';

import {
  homeController,
  registerUserController,
  registerUserControllerValidation,
  tokenAuthenticationController,
  tokenAuthenticationControllerValidation
} from '../controllers'

const router = express.Router();

const homeRoute = router.get("/", homeController);
const registerUserRoute = router.post("/register-user", registerUserControllerValidation, registerUserController);
const tokenAuthRoute = router.post("/auth", tokenAuthenticationControllerValidation, tokenAuthenticationController);

//TODO: ADD login

export {
  homeRoute,
  registerUserRoute,
  tokenAuthRoute
}