'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Instruction.associate = function(models) {
    // associations can be defined here
    Instruction.belongsTo(models.Project, { foreignKey: 'projectId' });
    Instruction.belongsTo(models.Project, { foreignKey: 'step' });
    Instruction.hasMany(models.Image, { foreignKey: 'instructionId' });
    Instruction.hasMany(models.Video, { foreignKey: 'instructionId' });
  };
  return Instruction;
};
