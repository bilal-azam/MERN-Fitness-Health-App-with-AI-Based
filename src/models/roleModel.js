module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      permissions: {
          type: DataTypes.JSON,
          allowNull: false
      }
  });
  return Role;
};