const User = require('./User');
const Event = require('./Event');
const Invitation = require('./Invitation');

// rels
// events/users thru invitations (many-to-many)
// users have many 


module.exports = { User, Event, Invitation };
