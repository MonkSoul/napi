/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('student', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    Age: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CreatedTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'student'
  });

  Model.associate = function() {

  }

  return Model;
};
