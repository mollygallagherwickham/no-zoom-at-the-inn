const mongoose = require('mongoose')
const User = require('../models/user')

const EventSchema = new mongoose.Schema({
  eventName: String,
  organiser_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
  eventDate: String,
  location: String,
  number_attending: { type: Number, default: 0 },
  attendees: { type: Array, default: [] }

})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event