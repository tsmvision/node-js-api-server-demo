import express from 'express';
import bodyParser from 'body-parser';
import {homeRoute, registerUserRoute} from './routes/routes';

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({extended: false});

// application/json
app.use(jsonParser);
app.use(homeRoute);
app.use(registerUserRoute);

const portNumber = 8000;

app.listen(portNumber, () => {
  console.log(`Server running on port ${portNumber}`);
});