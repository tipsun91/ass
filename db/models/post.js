'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Like }) {
      // define association here
      Post.belongsTo(User, { foreignKey: 'user_id' });
      Post.belongsToMany(User, { through: Like, foreignKey: 'post_id', otherKey: 'user_id' });
      Post.hasMany(Like, { foreignKey: 'post_id' });
    }
  }
  Post.init({
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
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    image_url: {
      allowNull: true,
      type: DataTypes.TEXT,
      validate: {
        isUrl: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'Posts',
  });
  return Post;
};
