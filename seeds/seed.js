const seedUsers = require('./user-seeds');
const seedEvents = require('./event-seeds');
const seedInvitations = require('./invitation-seeds');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----USERS SYNCED -----\n');
  await seedEvents();
  console.log('\n----EVENTS SYNCED -----\n');
  await seedInvitations();
  console.log('\n----INVITATIONS SYNCED -----\n');
  
  process.exit(0);
};

seedDatabase();
