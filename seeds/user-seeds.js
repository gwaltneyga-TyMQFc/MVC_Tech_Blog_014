const { User } = require("../models");

const userData = [
  {
    username: "Gwaltneyga",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;