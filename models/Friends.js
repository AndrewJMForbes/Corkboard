const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Friends extends Model {};

Friends.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        friends_list: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            references: {
                model: "user"
            }
        }
    }
)