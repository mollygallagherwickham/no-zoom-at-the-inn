const User = require('../models/user')


const UsersController = {
  New: (req, res) => {
    res.render('users/new', { newUser: true })
  },

  Create: (req, res, next) => {

    const obj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      }

      const user = new User(obj)

      user.save((err)=>{
        if(err){
            throw err
        }
        console.log(req.body.first_name)
        res.redirect("/")
      })
    }
  }

module.exports = UsersController
