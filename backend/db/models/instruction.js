'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    text: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  Instruction.associate = function(models) {
    // associations can be defined here
  };
  return Instruction;
};