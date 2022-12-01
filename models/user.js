const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: String,
  last_name: String,
  password: String,
  first_name: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User