'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
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
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Instruction, { foreignKey: 'instructionId' });
  };
  return Image;
};
