var User = require('../models/user')

const SessionsController = {
  New: (req, res) => {
    if (req.session.user) {
      res.redirect('/')
    } else {
      res.render('sessions/new', { newUser: true })
    }
  },

  Create: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // finds the user with an email that matches the email input given by the user
    User.findOne({ email: email }).then((user) => {
        // if user is not found, then send to login page
      if (!user) {
        res.redirect("/sessions/new");
        // else if password is not the same, send to login page
      } else if (user.password != password) {
        res.redirect("/sessions/new");
        // else password is correct, 
      } else {
        req.session.user = user;
        res.redirect("/");
      }
    });
  },

  Destroy: (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.redirect('/')
    }
    res.redirect('/sessions/new')
  }
}

module.exports = SessionsController
