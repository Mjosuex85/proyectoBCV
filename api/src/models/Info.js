const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    
    sequelize.define('dolar', {
        name: {
          type: DataTypes.STRING,
          unique: true
        }
    });
};
