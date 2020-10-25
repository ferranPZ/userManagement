const express = require('express')

const router = express.Router()
const User = require('../database/models/User')
const Address = require('../database/models/Address')
const Post = require('../database/models/post')
const { route } = require('./posts')

router.get('/', async (req, res) => {
    const users = await User.findAll({
        include: [{
            model: Address,
            as: "domicilio",
            attributes: ['street']
        }, {
            model: Post,
            as: "publicaciones",
            attributes: ['title', 'body']
        }],

        attributes: ['username', 'age']
    })
    res.json(users)
})

//Create
router.post('/', async (req, res) => {

    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            age: req.body.age,
            role: req.body.role,
            domicilio: { street: req.body.street }
        },
            {
                include: "domicilio"
            })
        res.json(user)
    } catch (error) {
        res.json(error)
    }

})

//Read
//leer direccion de usuario /api/users/:id/domicilio
router.get('/:id/domicilio', async (req, res) => {
    user = await User.findByPk(req.params.id)
    res.json(await user.getDomicilio())
})

//leer publicacion de usuario /api/users/:id/domicilio
router.get('/:id/publicacion', async (req, res) => {
    user = await User.findByPk(req.params.id)
    res.json(await user.getPublicaciones())
})

//Update
//Delete


module.exports = router 