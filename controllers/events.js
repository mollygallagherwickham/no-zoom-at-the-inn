const Event = require('../models/event')
const User = require('../models/user')

const EventsController = {
    Index: (req, res) => {
        Event.find().sort({eventDate:1}).populate('organiser_id').exec((err, events) => {
            if (err) {
                throw err
            }
            res.render('events/index', { events, current_organiser: req.session.user.first_name, current_session: req.session.user._id }) 
        })
    },
    
    New: (req, res) => {
        res.render('events/new', {});
    },

    Create: (req, res) => {
        // this creates new event with requested body parameters
        var event = new Event({
            organiser_id: req.session.user,
            eventName: req.body.eventName,
            eventDate: req.body.eventDate,
            location: req.body.location
        })

        // if there's an error, returns error and redirects to homepage
        if (event.eventName != "") {
            event.save((err) => {
                if (err) {
                    throw err;
                }
                res.status(201).redirect("/events");
            });
        } else {
            res.redirect("/events/new");
        }
    },

    Attend: (req, res) => {
        // check if current user is in attending list
        Event.findOne({ _id: req.body.id, attendees: req.session.user._id }).exec((err, result) => {
            if (err) {
              throw err
            }
            if (result) {
              Event.findOneAndUpdate({ _id: req.body.id }, { $inc: { number_attending: -1 }, $pull: { attendees: req.session.user._id } }).exec((err) => {
                if (err) {
                  throw err
                }
                res.status(201).redirect('/events')
              })
            } else {
            // otherwise number_attending is added to database and current user added to attendees for that event
              Event.findOneAndUpdate({ _id: req.body.id }, { $inc: { number_attending: 1 }, $push: { attendees: req.session.user._id } }).exec((err) => {
                if (err) {
                  throw err
                }
                res.status(201).redirect('/events')
              })
            }
          })
    },

    CheckAttending: (req, res) => {
        Event.findOne({ _id: req.body.id, attendees: req.session.user._id }).exec((err, result) => {
          if (err) {
            throw err
          }
          if (result) {
            res.json({ attending: 'true', id: req.body.id })
          } else {
            res.json({ attending: 'false', id: req.body.id })
          }
        })
      },

       MyEvents: (req, res) => {
        Event.find({
          organiser_id : `${req.session.user._id}`
          }).sort({eventDate:1}).populate('organiser_id').exec(async(err, events) => {
            if (err) {
              throw err
            } const arrayOfUsers = [];
            for(const event of events){
              const resultUsers = await User.find({_id : { $in: event.attendees} })
              arrayOfUsers.push(resultUsers)
              console.log("inside for each")
            }
              console.log(arrayOfUsers)
              res.render('events/mine', { events, arrayOfUsers,
              current_organiser: req.session.user.first_name, 
              current_session: req.session.user._id })
          
        })
      },

}

module.exports = EventsController;