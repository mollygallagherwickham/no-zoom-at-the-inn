const List = require('../models/list')
const User = require('../models/user')

const ListsController = {
  View: (req, res) => {
    res.render('lists/index', {});
  },
  
  New: (req, res) => {
    res.render('lists/new', {});
  },
  
  Create: (req, res) => {
    // this creates new list with requested body parameters
    var list = new List({
      userID: req.session.user,
      listName: req.body.listName
    })
    // if there's an error, returns error and redirects to homepage
    if (list.listName != "") {
      list.save((err) => {
        if (err) {
          throw err;
        }
        res.status(201).redirect("/lists");
      });
    } else {
      res.redirect("/lists/new");
    }
  }, 
};

module.exports = ListsController;
