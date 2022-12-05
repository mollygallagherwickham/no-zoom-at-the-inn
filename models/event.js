const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  eventName: String,
  organiser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
  date: String,
  Attendees: { type: Array, default: [] }

  
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event