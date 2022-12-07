const Song = require('../models/song')
const User = require('../models/user')

const SongsController = {
    Index: (req, res) => {
        Song.find().sort({votes:-1}).exec((err, songs) => {
            if (err) {
                throw err
            }
            res.render('songs/index', { songs: songs })
        })
    },

    New: (req, res) => {
      res.render('songs/new', {});
  },

    Create: (req, res) => {
        // this creates new event with requested body parameters
        var song = new Song({
          songTitle: req.body.songTitle,
          artistName: req.body.artistName,
        })
        // if there's an error, returns error and redirects to homepage
        if (song.songTitle != "") {
            song.save((err) => {
                if (err) {
                    throw err;
                }
                res.status(201).redirect("/songs");
            })
        } else {
            res.redirect("/songs/new");
        }
    },

    Vote: (req, res) => {
        Song.exists({ voters: `${req.session.user._id}` }).exec((err, result) => {
            if (err) {
                throw err
            }
            if(result) {
                res.status(201).redirect('back')
            } else {
                Song.findOneAndUpdate({ _id: req.body.id }, { $inc: { votes: 1 }, $push: { voters: req.session.user._id }}).exec((err) => {
                    if (err) {
                        throw err
                      }
                      res.status(200).redirect('back')
                })
            }
        })
    }
}

module.exports = SongsController;