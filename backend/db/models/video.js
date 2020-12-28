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
    instructionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Video.associate = function(models) {
    // associations can be defined here
    Video.belongsTo(models.Instruction, { foreignKey: 'instructionId' });
  };
  return Video;
};
