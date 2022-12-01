const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
<<<<<<< HEAD
  last_name: String,
  password: String,
  first_name: String
=======
  password: String
>>>>>>> main
})

const User = mongoose.model('User', UserSchema)

module.exports = User
