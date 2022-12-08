const List = require('../models/list')
const User = require('../models/user')

const ListsController = {
  View: (req, res) => {
    if (req.session.user != undefined){
      var myID = req.session.user._id;
    } else {
      var myID = "";
    }
    List.find({ userID: myID}, function (err, mylists) {
      if (err) {
        throw err;
      }
      if (mylists.length==0) {
        headingText = "You have not got a list yet."
      } else {
        headingText = "Your lists:"
      };
      res.render("lists/index", { lists: mylists, headingText: headingText });
    });
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
  
  AddTask: (req, res) => {
    List.findOneAndUpdate({ _id: req.body.listId }, { $push: { tasks: {task: req.body.tasks, isComplete: false} } }, { returnNewDocument: true }).exec((err) => {
      
      if (err) {
        
        throw err
      }
      res.status(200).redirect('back')
    })
  },

  ViewOne: (req, res) => {
    List.findOne({ _id: req.query.list }, function (err, mylist) {
      res.render('lists/view', { list: mylist });
    });
  },

  ItemChecked: (req, res) => {
    var tasks = [];
    List.findOne({ _id: req.body.listID }, function (err, thislist) {
      tasks = thislist.tasks;
      const result = tasks.filter(task => task._id == req.body.taskID);
      result[0].isComplete = req.body.checked;
      List.findOneAndUpdate({ _id: req.body.listID }, { $set: { tasks: tasks } }).exec((err) => {
        if (err) {
          throw err
        }
        res.status(200).redirect('/lists/view')
      })
    });
  }
};

module.exports = ListsController;
