import express from 'express';
import {homeRoute} from './routes/routes';

const app = express();

app.use(homeRoute);

const portNumber = 8000;

app.listen(portNumber, () => {
  console.log(`Server running on port ${portNumber}`);
});