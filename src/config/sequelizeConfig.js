import {Sequelize} from 'sequelize';
import dbCredential from './dbCredential';

const {dbName, id, password} = dbCredential;

const sequelize = new Sequelize(
  dbName,
  id,
  password,
  {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
);

export default sequelize;