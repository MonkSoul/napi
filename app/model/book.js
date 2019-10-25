/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('book', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Author: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CreatedTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastUpdatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'book'
  });

  Model.associate = function() {

  }

  return Model;
};
