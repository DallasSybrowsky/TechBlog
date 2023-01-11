const { User } = require('../models');
const sequelize = require('../config/connection');
const userData = [
  {
    username: "Mike",
    password: "12341234",
    email: "mail1@mail.com"
  },
  {
    username: "Joey",
    password: "12341234",
    email: "mail2@mail.com"
  },
  {
    username: "Fred",
    password: "12341234",
    email: "mail3@mail.com"
  },
  {
    username: "Seth",
    password: "12341234",
    email: "mail4@mail.com"
  },
  {
    username: "Ben",
    password: "12341234",
    email: "mail5@mail.com"
  }
];

seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;