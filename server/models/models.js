const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
  });

  const Type = sequelize.define("type", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
  });

  const Notice = sequelize.define("notice", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    typeId: { type: DataTypes.INTEGER},
    description: {type: DataTypes.STRING},
  }); 

User.hasMany(Notice);
Notice.belongsTo(User);

Type.hasMany(Notice);
Notice.belongsTo(Type);

module.exports = {
    User,
    Notice,
    Type,
  }; 