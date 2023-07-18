const { User } = require('../models');

const userData = [
  {
    "username": "Sal",
    "email": "sal@hotmail.com",
    "password": "password12345",
    "birthday": "09/20/1996",
    "location": "Chicago, IL"
  },
  {
    "username": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "password12345",
    "birthday": "09/20/1996",
    "location": "Chicago, IL"
  },
  {
    "username": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "password12345",
    "birthday": "09/20/1996",
    "location": "Chicago, IL"
  },
  {
    "username": "Jordan",
    "email": "jordan99@msn.com",
    "password": "password12345",
    "birthday": "09/20/1996",
    "location": "Chicago, IL"
  },
  {
    "username": "Blake",
    "email": "the_blake@yahoo.com",
    "password": "password12345",
    "birthday": "09/20/1996",
    "location": "Chicago, IL"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
