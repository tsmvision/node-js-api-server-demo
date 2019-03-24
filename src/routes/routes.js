import express from 'express';

import {
  homeController,
  registerUserController,
  registerUserControllerValidation,
  jwtAuthController,
  jwtAuthControllerValidation
} from '../controllers'

const router = express.Router();

const homeRoute = router.get("/", homeController);
const registerUserRoute = router.post("/register-user", registerUserControllerValidation, registerUserController);
const jwtAuthRoute = router.post("/auth", jwtAuthControllerValidation, jwtAuthController);

export {
  homeRoute,
  registerUserRoute,
  jwtAuthRoute
}