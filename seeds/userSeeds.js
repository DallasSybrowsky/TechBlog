const { User } = require('../models');
const sequelize = require('../config/connection');
const userData = [
  {
    username: "ana",
    password: "12341234",
    email: "mail1@mail.com"
  },
  {
    username: "conrad",
    password: "12341234",
    email: "mail2@mail.com"
  },
  {
    username: "Gia",
    password: "12341234",
    email: "mail3@mail.com"
  },
  {
    username: "Nikita",
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