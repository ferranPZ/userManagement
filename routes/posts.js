const { response } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post')
const User = require('../database/models/user')



router.get('/', async (req, res) => {
    const posts = await Post.findAll({
        include: {
            model: User,
            as: "autor",
            attributes: ['username']

        },
        attributes: ['title', 'body']
    })
    res.json(posts)
})



//create
router.post('/', async (req, res) => {
    const post = await Post.create({
        title: req.body.title,
        body: req.body.body
    })

    res.json(post)
})


//read
router.get('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id)
    res.json(post)
})

//update
router.patch('/:id', async (req, res) => {
    const result = await Post.update({
        title: req.body.title,
        body: req.body.body
    }, {
        where: { id: req.params.id }
    })

    res.json(result)
})


//delete
router.delete('/:id', async (req, res) => {
    const result = await Post.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(result)
})

module.exports = router 