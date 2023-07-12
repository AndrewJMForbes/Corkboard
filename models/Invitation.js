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
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "event",
        key: "id"
      }
    },
    invitee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
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
