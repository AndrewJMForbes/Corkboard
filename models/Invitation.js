const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// const User = require("./User");
// const Event = require("./Event");

class Invitation extends Model {}

Invitation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    invitationStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invitationDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "event",
        key: "id",
        unique: false
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: false
      }
    },
    isHost: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'invitation'
  }
)


// Invitation.belongsTo(User, { foreignKey: "userID" });
// Invitation.belongsTo(Event, { foreignKey: "eventID" });

module.exports = Invitation;
