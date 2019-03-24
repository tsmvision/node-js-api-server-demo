import {Sequelize, Model} from 'sequelize';
import sequelize from '../config/sequelizeConfig';

class User extends Model {
}

User.init({
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "email"
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {sequelize});

// sequelize.sync();
//   .then(() =>; User.create({
//     email: "luke",
//     password: "1234"
//   }))
//   .then(
//     luke => {
//       console.log(luke.toJSON());
//     }
//   );

export default User;