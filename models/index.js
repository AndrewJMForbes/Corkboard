const User = require('./User');
const Event = require('./Event');
const Invitation = require('./Invitation');

User.belongsToMany(Event, {
    through: Invitation,
    as: 'user_events'
});

Event.belongsToMany(User, {
    through: Invitation,
    as: 'invited_users'
});


module.exports = { User, Event, Invitation };
