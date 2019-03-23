import express from 'express';
import {homeController, registerUserController} from '../controllers'

const router = express.Router();

const homeRoute = router.get("/", homeController);
const registerUserRoute = router.post("/register-user", registerUserController);

export {
  homeRoute,
  registerUserRoute
}