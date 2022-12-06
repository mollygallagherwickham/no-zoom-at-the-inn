const mongoose = require('mongoose')
const User = require('./user')

const SongSchema = new mongoose.Schema({
  songTitle: String,
  artistName: String,
  votes: { type: Number, default: 0 },
  voters: { type: Array, default: [] }
})

const Song = mongoose.model('Song', SongSchema)

module.exports = Song