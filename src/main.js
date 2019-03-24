import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {homeRoute, loginRoute, addUserRoute, updateUserRoute, deleteUserRoute, tokenAuthRoute} from './routes/routes';

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({extended: false});

// Enable All CORS Requests
app.use(cors());

// application/json
app.use(jsonParser);

app.use(homeRoute);
app.use(loginRoute);
app.use(addUserRoute);
app.use(updateUserRoute);
app.use(deleteUserRoute);
app.use(tokenAuthRoute);


const portNumber = 8000;

app.listen(portNumber, () => {
  console.log(`Server running on port ${portNumber}`);
});