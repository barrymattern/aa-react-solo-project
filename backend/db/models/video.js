'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 200],
      },
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instructionId: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
    Video.belongsTo(models.Instruction, { foreignKey: 'instructionId' });
    Video.belongsTo(models.Project, { foreignKey: 'projectId' });
  };
  return Video;
};
