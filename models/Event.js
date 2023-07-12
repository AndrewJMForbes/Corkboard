const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
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
    attendees: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      references: {
        model: "invitation",
        key: "invitee_id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event'
  }
)

module.exports = Event;
