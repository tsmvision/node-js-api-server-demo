import express from 'express';
import {homeController, registerUserController, registerUserControllerValidation} from '../controllers'

const router = express.Router();

const homeRoute = router.get("/", homeController);
const registerUserRoute = router.post("/register-user", registerUserControllerValidation, registerUserController);

export {
  homeRoute,
  registerUserRoute
}