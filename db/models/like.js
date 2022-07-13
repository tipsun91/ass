'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Post }) {
      // define association here
      Like.belongsTo(User, { foreignKey: 'user_id' });
      Like.belongsTo(Post, { foreignKey: 'post_id' });
    }
  }
  Like.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Users'
        },
        key: 'id',
      },
    },
    post_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Posts'
        },
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Like',
    tableName: 'Likes',
    indexes: [
      {
          unique: true,
          fields: ['user_id', 'post_id']
      },
    ],
  });
  return Like;
};
