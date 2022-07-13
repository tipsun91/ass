'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static async isExists(email) {
      return await this.findOne({ where: { email } });
    }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post, Like }) {
      User.hasMany(Post, { foreignKey: 'user_id' });
      User.belongsToMany(Post, { through: Like, foreignKey: 'user_id', otherKey: 'post_id' });
      User.hasMany(Like, { foreignKey: 'user_id' });
    }
  }
  User.init({
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        isEmail: true
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        is: /^[a-zA-Zа-яА-ЯёЁ]{3,20}$/
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
