const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
  listName: String,
  userID: String,
  tasks: [{
    task: { type: String },
    isComplete: { type: Boolean }
  }]
})

const List = mongoose.model('List', ListSchema)

module.exports = List