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


}

module.exports = EventsController;