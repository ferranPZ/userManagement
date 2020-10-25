const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }
Post.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT
}, {
    timestamps: false,
    sequelize,
    modelName: 'post'
})

module.exports = Post