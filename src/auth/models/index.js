const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const usersSchema = require('./users-model');

const usersModel = usersSchema(sequelize, DataTypes);

let herokuOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}

let sequelize = new Sequelize(DATABASE_URL, herokuOptions);

module.exports = {
  db: sequelize,
  Users: usersModel,
};