'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },
    step: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.User, { foreignKey: 'userId' });
    Project.hasMany(models.Comment, { foreignKey: 'projectId' });
    Project.hasMany(models.Instruction, { foreignKey: 'projectId' });
    Project.hasMany(models.Image, { foreignKey: 'projectId' });
    Project.hasMany(models.Video, { foreignKey: 'projectId' });
  };
  return Project;
};
