//dependencias 
const express = require('express')
const sequelize = require('./database/db')
require('./database/asosiations')


//rutas 
const Post = require('./routes/posts')
const User = require('./routes/users')
const Address = require('./routes/address')

const app = express()

//setting
const PORT = process.env.PORT || 3000;


//middleware
app.use(express.json())
app.use(express.urlencoded())


app.use('/api/posts/', Post)
app.use('/api/users/', User)
app.use('/api/address/', Address)

//Arranque de servidor
app.listen(PORT, () => {
    console.log(`La app esta corriendo en http://localhost:${PORT}`)

    //conectarse a la bdd
    sequelize.sync({ force: false }).then(() => {
        console.log("Nos hemos conectado a la bdd");
    })
})