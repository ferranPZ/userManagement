const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../db')

class User extends Model { }
User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                args: true,
                msg: 'El nombre solo puede contener letras'
            },
            len: {
                args: [3, 255],
                msg: "El nombre debe poseer entre 3 y 255 caracteres"
            },
            notNull: {
                msg: "El campo no puede ser nulo"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                args: true,
                msg: "El campo debe ser un email valido"
            }
        }
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: {
                args: true, msg: "El campo debe ser un numero entero"
            },
            min: 1,
            max: 255,
            esPar(value) {
                if (value % 2) {
                    throw new Error('La edad tiene que ser un numero par')
                }
            }
        }

    },
    //si es 0 es usuario normal si es 1 es administrador
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, {
    timestamps: false,
    sequelize,
    modelName: 'user'
})

module.exports = User;