const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Event = sequelize.define("Event", {
  eventName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eventDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eventDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  eventTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  eventLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Event;
