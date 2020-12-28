'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        len: [3, 50]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Project;
};