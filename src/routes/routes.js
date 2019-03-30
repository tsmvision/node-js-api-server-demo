import express from 'express';

import {
  homeController,
  loginController,
  addUserController,
  addUserControllerValidation,
  updateUserController,
  // updateUserControllerValidation,
  deleteUserController,
  // deleteUserControllerValidation,
  tokenAuthenticationController,
  tokenAuthenticationControllerValidation
} from '../controllers'

const router = express.Router();

const homeRoute = router.get("/", homeController);
const loginRoute = router.post("/login", loginController);
const addUserRoute = router.post("/user", addUserControllerValidation, addUserController);
const updateUserRoute = router.put("/user", updateUserController);
const deleteUserRoute = router.delete("/user/:id", deleteUserController);

const tokenAuthRoute = router.get("/auth", tokenAuthenticationControllerValidation, tokenAuthenticationController);


export {
  homeRoute,
  loginRoute,
  addUserRoute,
  updateUserRoute,
  deleteUserRoute,
  tokenAuthRoute
}