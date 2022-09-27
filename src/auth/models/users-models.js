'use strict';

const usersSchema = (sequelize, DataTypes) =>
  sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      fullname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

module.exports = usersSchema;
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(process.env.DATABASE_URL);

// // Create a Sequelize model
// const Users = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });