import {Sequelize} from 'sequelize';
import dbCredential from './dbCredential';

const sequelize = new Sequelize(
  dbCredential.db,
  dbCredential.id,
  dbCredential.password,
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