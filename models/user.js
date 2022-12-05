const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  friends: { type: Array, default: [] },
  dietary_requirements: { type: String, default: "None" },
  wish_list: { type: Array, default: [] }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
