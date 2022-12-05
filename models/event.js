const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  eventName: String,
  organiser_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
  eventDate: String,
  location: String,
  attendees: { type: Array, default: [] }

  
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event