const User = require('./User');
const Event = require('./Event');
const Invitation = require('./Invitation');

User.belongsToMany(Event, {
    through: {
        model: Invitation,
        unique: false
    },
    as: 'user_events'
});

Event.belongsToMany(User, {
    through: { 
        model: Invitation,
        unique: false
    },
    as: 'invited_users'
});


module.exports = { User, Event, Invitation };
