const User = require('../models/user')


const UsersController = {
  New: (req, res) => {
    res.render('users/new', { newUser: true })
  },

  Create: (req, res, next) => {

      const user = new User(req.body)

      user.save((err)=>{
        if(err){
            throw err
        }
        User.find({email: req.body.email, password: req.body.password}).then((result)=>{
            if(result){
                console.log("stored")
                res.redirect("/")
            }
        })
      })
      
  }
}

module.exports = UsersController
