import {Sequelize, Model} from 'sequelize';
import sequelize from '../config/sequelizeConfig';

class User extends Model {
}

User.init({
  email: Sequelize.STRING,
  password: Sequelize.STRING
}, {sequelize});

// sequelize.sync()
//   .then(() => User.create({
//     email: "luke",
//     password: "1234"
//   }))
//   .then(
//     luke => {
//       console.log(luke.toJSON());
//     }
//   );

export default User;