/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('member', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    tableName: 'member'
  });

  Model.associate = function() {

  }

  return Model;
};
