import express from 'express';

const router = express.Router();

const homeRoute = router.get("/", (req, res) => {
  res.send({
    message: "Hello World!"
  });
});

export {
  homeRoute
}