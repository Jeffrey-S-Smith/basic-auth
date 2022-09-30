const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const usersSchema = require('./users-models.js');

let herokuOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};


let sequelize = new Sequelize(DATABASE_URL, herokuOptions);
const usersModel = usersSchema(sequelize, DataTypes);






module.exports = {
  db: sequelize,
  Users: usersModel,
};