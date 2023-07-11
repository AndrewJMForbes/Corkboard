const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("../models/User");
const Event = require("../models/Event");

const Invitation = sequelize.define("Invitation", {
  invitationStatus: {
    type: DataTypes.String,
    allowNull: false,
    // boolean?
  },
  invitationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Invitation.belongsTo(User, { foreignKey: "userID" });
Invitation.belongsTo(Event, { foreignKey: "eventID" });

module.exports = Invitation;
