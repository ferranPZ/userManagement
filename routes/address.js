const express = require('express')

const router = express.Router()
const User = require('../database/models/User')
const Address = require('../database/models/Address')


router.get('/', async (req, res) => {
    try {
        const address = await Address.findAll({
            include: {
                model: User,
                as: "residente",
            },
        })
        res.json(address)

    } catch (error) {
        res.json(error)
    }

})

module.exports = router