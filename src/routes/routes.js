import express from 'express';

import {
  homeController,
  loginController,
  addUserController,
  addUserControllerValidation,
  updateUserController,
  updateUserControllerValidation,
  tokenAuthenticationController,
  tokenAuthenticationControllerValidation
} from '../controllers'

const router = express.Router();

const homeRoute = router.get("/", homeController);
const loginRoute = router.post("/login", loginController);
const addUserRoute = router.post("/user", addUserControllerValidation, addUserController);
// updateUserRoute
const updateUserRoute = router.patch("/user", updateUserController);
// deleteuserRoute
// const deleteUserRoute = router.delete("/user, deleteUserController);


const tokenAuthRoute = router.post("/auth", tokenAuthenticationControllerValidation, tokenAuthenticationController);



export {
  homeRoute,
  loginRoute,
  addUserRoute,
  updateUserRoute,
  tokenAuthRoute
}