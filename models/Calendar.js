const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CalendarEvent extends Model {}

CalendarEvent.init(
  {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    // Other fields as needed
  },
  {
    sequelize,
    modelName: "CalendarEvent",
  }
);

module.exports = CalendarEvent;
