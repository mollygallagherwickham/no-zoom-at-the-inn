const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  friends: { type: Array, default: [] },

  dietary_requirements: { type: String, default: "None" },

  wish_list: { type: Array, default: [] },
  event_id: { type: Array, default: [] }
  // events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
})

const User = mongoose.model('User', UserSchema)

module.exports = User
