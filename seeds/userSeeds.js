const { User } = require('../models');
const sequelize = require('../config/connection');
const userData = [
  {
    username: "Mike",
    password: "12341234",
  },
  {
    username: "Joey",
    password: "12341234",
  },
  {
    username: "Fred",
    password: "12341234",
  },
  {
    username: "Seth",
    password: "12341234",
  },
  {
    username: "Ben",
    password: "12341234",
  }
];

seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;