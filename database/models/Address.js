const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Address extends Model { }
Address.init({
    street: DataTypes.STRING,
}, {
    timestamps: false,
    sequelize,
    modelName: 'address'
})

module.exports = Address