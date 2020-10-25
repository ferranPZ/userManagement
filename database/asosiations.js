const Post = require("./models/Post")
const Address = require("./models/Address")
const User = require("./models/User")


//anade una clave forenaea a user llamada domicilio, para q adress este relacionado con user
User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id" });


//anade una clave forenaea a user, para q user este relacionado con address 
Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" })


//1 a n - un usuario tiene muchos posts
//se anade clave userId a Post
//as: nombre con el q aparece cuando hago el include - foreign key : nombre q se le da al userid en post
User.hasMany(Post, { as: 'publicaciones', foreignKey: "autorId" })
Post.belongsTo(User, { as: "autor" })